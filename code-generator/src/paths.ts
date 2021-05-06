import {parsed} from 'ringcentral-open-api-parser';
import fs from 'fs';
import path from 'path';
import {pascalCase, capitalCase, camelCase} from 'change-case';
import R from 'ramda';
import {Operation} from 'ringcentral-open-api-parser/lib/types';
import {spawnSync} from 'child_process';

import {capitalizeFirstLetter, patchSrcFile} from './utils';

const outputDir = path.join(__dirname, '..', '..', 'packages', 'core', 'paths');
spawnSync('rm', ['-rf', outputDir]);
spawnSync('mkdir', [outputDir]);

const generatePathMethod = (
  parameter: string | undefined,
  token: string,
  hasParent: boolean
): string => {
  if (parameter) {
    return `path(withParameter = true): string {
    if (withParameter && this.${parameter} !== null) {
        return \`${
          hasParent ? '${this.parent.path()}' : ''
        }/${token}/\${this.${parameter}}\`;
    }
    return \`${hasParent ? '${this.parent.path()}' : ''}/${token}\`;
  }`;
  } else {
    return `path(): string {
    return \`${hasParent ? '${this.parent.path()}' : ''}/${token.replace(
      'dotSearch',
      '.search'
    )}\`;
  }`;
  }
};

const generateConstructor = (
  parameter: string | undefined,
  defaultValue: string | undefined,
  parentPaths: string[]
): string => {
  const result = ['rc: RingCentral;'];
  if (parentPaths.length > 0) {
    result.push('parent: Parent;');
  }
  if (parameter) {
    result.push(`${parameter}: string | null;`);
  }
  if (parentPaths.length > 0) {
    result.push(
      `\n  constructor(parent: Parent${
        parameter
          ? `, ${parameter}: string | null = ${
              defaultValue ? `'${defaultValue}'` : null
            }`
          : ''
      }) {`
    );
    result.push('  this.parent = parent;');
    result.push('  this.rc = parent.rc;');
  } else {
    result.push(
      `\n  constructor(rc: RingCentral${
        parameter
          ? `, ${parameter}: string | null = ${
              defaultValue ? `'${defaultValue}'` : null
            }`
          : ''
      }) {`
    );
    result.push('  this.rc = rc;');
  }
  if (parameter) {
    result.push(`  this.${parameter} = ${parameter};`);
  }
  result.push('}');

  return result.join('\n  ');
};

const generateOperationMethod = (
  operation: Operation,
  parameter: string | undefined
): string => {
  // comments
  const comments = ['/**'];
  comments.push(
    `${(
      operation.description ||
      operation.summary ||
      capitalCase(operation.operationId)
    )
      .split('\n')
      .map(l => ` * ${l}`)
      .join('\n')}`
  );
  comments.push(` * HTTP Method: ${operation.method}`);
  comments.push(` * Endpoint: ${operation.endpoint}`);
  if (operation.rateLimitGroup) {
    comments.push(` * Rate Limit Group: ${operation.rateLimitGroup}`);
  }
  if (operation.appPermission) {
    comments.push(` * App Permission: ${operation.appPermission}`);
  }
  if (operation.userPermission) {
    comments.push(` * User Permission: ${operation.userPermission}`);
  }
  comments.push(' */');
  let result = comments.map(l => `  ${l}`).join('\n');

  // responseType
  let responseType = 'string';
  if (operation.responseSchema) {
    if (
      operation.responseSchema.type === 'string' &&
      operation.responseSchema.format === 'binary'
    ) {
      responseType = 'Buffer';
    } else if (operation.responseSchema.$ref) {
      responseType = operation.responseSchema.$ref;
    }
  }

  // methodParams
  const methodParams: string[] = [];
  if (operation.bodyParameters) {
    methodParams.push(
      `${operation.bodyParameters}: ${capitalizeFirstLetter(
        operation.bodyParameters
      )}`
    );
  }
  if (operation.queryParameters) {
    methodParams.push(
      `queryParams?: ${capitalizeFirstLetter(operation.queryParameters)}`
    );
  }
  methodParams.push('restRequestConfig?: RestRequestConfig');

  // requestParams
  const requestParams: string[] = [];
  requestParams.push(
    `this.path(${!operation.withParameter && parameter ? 'false' : ''})`
  );
  if (operation.multipart) {
    requestParams.push('formData');
  } else if (operation.bodyParameters) {
    requestParams.push(operation.bodyParameters);
  }
  requestParams.push(operation.queryParameters ? 'queryParams' : 'undefined');
  if (responseType === 'Buffer') {
    requestParams.push("{...restRequestConfig, responseType: 'arraybuffer'}");
  } else {
    requestParams.push('restRequestConfig');
  }

  // result
  result += `
  async ${operation.method2}(${methodParams.join(
    ', '
  )}): Promise<${responseType}> {\n`;
  if (operation.withParameter) {
    result += `    if (this.${parameter} === null)
    {
        throw new Error('${parameter} must be specified.');
    }

`;
  }
  if (operation.multipart) {
    result += `const formData = Utils.getFormData(${operation.bodyParameters});\n`;
  }
  result += `    const r = await this.rc.${
    operation.method
  }<${responseType}>(${requestParams.join(', ')});
    return r.data;
  }`;
  return result;
};

for (const item of parsed.paths) {
  const itemPaths = item.paths.map(p => pascalCase(p));
  let code = `class Index {
  ${generateConstructor(
    item.parameter,
    item.defaultParameter,
    R.init(itemPaths)
  )}

  ${generatePathMethod(
    item.parameter,
    R.last(item.paths)!,
    itemPaths.length > 1
  )}

${item.operations
  .map(operation => generateOperationMethod(operation, item.parameter))
  .join('\n\n')}
}

export default Index;
`;

  // imports
  code = `import RingCentral from '${Array(item.paths.length + 1)
    .fill('..')
    .join('/')}';\n\n${code}`;
  if (item.paths.length > 1) {
    code = `import Parent from '..';\n${code}`;
  }
  const definitionsUsed = new Set();
  for (const operation of item.operations) {
    if (operation.bodyParameters) {
      definitionsUsed.add(capitalizeFirstLetter(operation.bodyParameters));
    }
    if (operation.queryParameters) {
      definitionsUsed.add(capitalizeFirstLetter(operation.queryParameters));
    }
    if (operation.responseSchema?.$ref) {
      definitionsUsed.add(operation.responseSchema.$ref);
    }
  }
  if (definitionsUsed.size > 0) {
    code = `import {${Array.from(definitionsUsed).join(', ')}} from '${Array(
      item.paths.length + 1
    )
      .fill('..')
      .join('/')}/definitions';\n${code}`;
  }
  if (item.operations.length > 0) {
    code = `import {RestRequestConfig} from '${Array(item.paths.length + 1)
      .fill('..')
      .join('/')}/Rest';\n${code}`;
  }
  if (code.indexOf('Utils.') !== -1) {
    code = `import Utils from '${Array(item.paths.length + 1)
      .fill('..')
      .join('/')}/Utils';\n${code}`;
  }

  const folder = path.join(outputDir, ...itemPaths);
  fs.mkdirSync(folder, {recursive: true});
  fs.writeFileSync(path.join(folder, 'index.ts'), code.trim());

  // bridge methods
  if (item.paths.length > 1) {
    patchSrcFile(
      [
        'paths',
        ...R.init(item.paths).map(item => pascalCase(item)),
        'index.ts',
      ],
      [
        `import ${pascalCase(R.last(item.paths)!)} from './${pascalCase(
          R.last(item.paths)!
        )}';`,
      ],
      `
  ${camelCase(R.last(item.paths)!)}(${
        item.parameter
          ? `${item.parameter}: (string | null) = ${
              item.defaultParameter ? `'${item.defaultParameter}'` : 'null'
            }`
          : ''
      }): ${pascalCase(R.last(item.paths)!)} {
    return new ${pascalCase(R.last(item.paths)!)}(this${
        item.parameter ? `, ${item.parameter}` : ''
      });
  }
  `.trim()
    );
  }
}
