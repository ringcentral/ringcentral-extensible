import yaml from 'js-yaml';
import fs from 'fs';
import R from 'ramda';
import {pascalCase} from 'change-case';
import {titleCase} from 'title-case';
import {lowerCaseFirst} from 'lower-case-first';
import path from 'path';
import {spawnSync} from 'child_process';

import {
  normalizePath,
  deNormalizePath,
  getResponseType,
  patchSrcFile,
} from './utils';

const outputDir = path.join(__dirname, '..', 'packages', 'core', 'paths');
spawnSync('rm', ['-rf', outputDir]);
spawnSync('mkdir', [outputDir]);

const doc = yaml.load(
  fs.readFileSync(process.env.PATH_TO_SWAGGER_SPEC!, 'utf8')
) as any;

// Delete /restapi/oauth/authorize: https://git.ringcentral.com/platform/api-metadata-specs/issues/26
delete doc.paths['/restapi/oauth/authorize'];

const paths = Object.keys(doc.paths);
const normalizedPaths = paths.map(p => normalizePath(p));

const getRoutes = (prefix: any, name: any) => {
  return [
    ...prefix.split('/').filter((t: any) => t !== '' && !t.startsWith('{')),
    name,
  ].map(t => pascalCase(t));
};
const getFolderPath = (prefix: any, name: any) => {
  return path.join(outputDir, ...getRoutes(prefix, name));
};

const generate = (prefix = '/') => {
  let nextLevels = R.filter((p: any) => p.startsWith(prefix), normalizedPaths);
  nextLevels = R.map(
    p =>
      p
        .substring(prefix.length)
        .split('/')
        .filter((t: string) => t !== '')[0],
    nextLevels
  );
  nextLevels = R.filter(t => !R.isNil(t) && !t.startsWith('{'), nextLevels);
  nextLevels = R.uniq(nextLevels);

  if (R.isEmpty(nextLevels)) {
    return;
  }
  console.log('nextLevels', nextLevels);

  R.forEach((name: string) => {
    console.log('prefix', prefix);
    console.log('name', name);
    const routes = getRoutes(prefix, name);
    console.log('routes', routes);
    const folderPath = getFolderPath(prefix, name);
    console.log('folderPath', folderPath);

    let paramNames = R.filter(
      p => p.startsWith(`${prefix}${name}/{`),
      normalizedPaths
    );
    paramNames = R.map(
      p => p.substring(`${prefix}${name}/`.length),
      paramNames
    );
    paramNames = R.map(
      p => p.split('/').filter((t: any) => t !== '')[0],
      paramNames
    );
    paramNames = R.map(t => t.substring(1, t.length - 1), paramNames);
    const paramName = R.head(paramNames);

    if (fs.existsSync(folderPath)) {
      console.log('folder already exists');
      generate(`${prefix}${name}/`);
      if (paramName) {
        generate(`${prefix}${name}/{${paramName}}/`);
      }
      return;
    }
    fs.mkdirSync(folderPath);
    if (paramName) {
      console.log('paramName', paramName);
    }
    let defaultParamValue;
    if (name === 'restapi' && paramName === 'apiVersion') {
      defaultParamValue = 'v1.0';
    } else if (name === 'scim' && paramName === 'version') {
      defaultParamValue = 'v2';
    } else if (name === 'account' && paramName === 'accountId') {
      defaultParamValue = '~';
    } else if (name === 'extension' && paramName === 'extensionId') {
      defaultParamValue = '~';
    }

    let restRequestConfig = false;
    let code = `import RingCentral from '${Array(routes.length + 1)
      .fill('..')
      .join('/')}'

class Index {
  rc: RingCentral`;

    if (paramName) {
      code += `
  ${paramName}: (string | null)`;
    }
    if (routes.length > 1) {
      code += `
  parent: Parent`;
    }

    if (paramName) {
      code += `

  constructor (${
    routes.length > 1 ? 'parent: Parent' : 'rc: RingCentral'
  }, ${paramName}: (string | null) = ${
        defaultParamValue ? `'${defaultParamValue}'` : null
      }) {
    ${
      routes.length > 1
        ? `this.parent = parent
    this.rc = parent.rc`
        : 'this.rc = rc'
    }
    this.${paramName} = ${paramName}
  }`;
    } else {
      code += `

  constructor (${routes.length > 1 ? 'parent: Parent' : 'rc: RingCentral'}) {
    ${
      routes.length > 1
        ? `this.parent = parent
    this.rc = parent.rc`
        : 'this.rc = rc'
    }
  }`;
    }

    if (routes.length > 1) {
      code = `import Parent from '..'\n${code}`;
    }

    if (paramName) {
      code += `

  path (withParameter: boolean = true): string {
    if (withParameter && this.${paramName} !== null) {
      return \`${
        routes.length > 1 ? '$' + '{this.parent.path()}' : ''
      }/${name}/\${this.${paramName}}\`
    }

    return ${routes.length > 1 ? '`$' + '{this.parent.path()}' : '`'}/${name}\`
  }`;
    } else {
      code += `

  path (): string {
    return ${
      routes.length > 1 ? '`$' + '{this.parent.path()}' : '`'
    }/${name.replace('dotSearch', '.search')}\`
  }`;
    }

    let operations: any[] = [];
    const endpoints = [deNormalizePath(`${prefix}${name}`)];
    if (paramName) {
      endpoints.push(`${deNormalizePath(`${prefix}${name}`)}/{${paramName}}`);
    }
    endpoints.forEach(endpoint => {
      console.log('endpoint', endpoint);
      const endpointObj = doc.paths[endpoint];
      if (endpointObj) {
        const methods = Object.keys(endpointObj);
        console.log('HTTP methods', methods);
        methods.forEach(method => {
          // remove duplicate DELETE operation
          // it's OK to have duplicate GETs since we have both Get and List
          operations = operations.filter(
            op => op.method === 'get' || op.method !== method
          );
          operations.push({
            endpoint,
            method,
            detail: endpointObj[method],
          });
        });
      }
    });

    const definitionsUsed = new Set();
    operations.forEach(operation => {
      const smartMethod =
        operation.method === 'get' &&
        !operation.endpoint.endsWith('}') &&
        R.any(
          (o: any) =>
            o.method === 'get' &&
            o.endpoint === operation.endpoint + `/{${paramName}}`
        )(operations)
          ? 'list'
          : operation.method;
      const responses = operation.detail.responses;
      let responseType = getResponseType(responses);
      if (!responseType) {
        responseType = 'string';
      } else if (responseType !== 'Buffer') {
        definitionsUsed.add(responseType);
      }

      let body, bodyClass, bodyParam, formUrlEncoded, multipart;

      if (
        operation.detail.requestBody &&
        operation.detail.requestBody.content &&
        operation.detail.requestBody.content[
          'application/x-www-form-urlencoded'
        ]
      ) {
        formUrlEncoded = true;
      } else if (
        operation.detail.requestBody &&
        operation.detail.requestBody.content &&
        operation.detail.requestBody.content['multipart/form-data']
      ) {
        multipart = true;
      } else if (
        operation.detail.consumes &&
        !operation.detail.consumes.some(
          (c: string) => c === 'application/json'
        ) &&
        !operation.detail.consumes.some((c: string) => c.startsWith('text/'))
      ) {
        throw new Error(
          `Unsupported consume content type: ${operation.detail.consumes.join(
            ', '
          )}`
        );
      }

      // if (
      //   operation.detail.consumes &&
      //   operation.detail.consumes[0] === 'application/x-www-form-urlencoded'
      // ) {
      //   formUrlEncoded = true;
      // } else if (
      //   operation.detail.consumes &&
      //   R.any(
      //     (item: string) => item.startsWith('multipart/'),
      //     operation.detail.consumes
      //   )
      // ) {
      //   multipart = true;
      // } else if (
      //   operation.detail.consumes &&
      //   !operation.detail.consumes.some(
      //     (c: string) => c === 'application/json'
      //   ) &&
      //   !operation.detail.consumes.some((c: string) => c.startsWith('text/'))
      // ) {
      //   throw new Error(
      //     `Unsupported consume content type: ${operation.detail.consumes.join(
      //       ', '
      //     )}`
      //   );
      // }
      else {
        const requestBody = operation.detail.requestBody;
        if (requestBody) {
          const content = requestBody.content;
          body = content[Object.keys(content)[0]];
          if (body.schema.type === 'string') {
            bodyClass = 'string';
            bodyParam = 'body';
          } else {
            bodyClass = R.last(body.schema.$ref.split('/'));
            bodyParam = lowerCaseFirst(bodyClass);
            definitionsUsed.add(bodyClass);
          }
        }

        // body = (operation.detail.parameters || []).filter(
        //   (p: any) => p.in === 'body'
        // )[0];
        // if (body) {
        //   if (body.schema.type === 'string') {
        //     bodyClass = 'string';
        //     bodyParam = 'body';
        //   } else {
        //     bodyClass = R.last(body.schema.$ref.split('/'));
        //     bodyParam = lowerCaseFirst(bodyClass);
        //     definitionsUsed.add(bodyClass);
        //   }
        // }
      }
      if (formUrlEncoded || multipart) {
        bodyClass = `${pascalCase(operation.detail.operationId)}Request`;
        bodyParam = `${operation.detail.operationId}Request`;

        const content = operation.detail.requestBody.content;
        body = content[Object.keys(content)[0]];
        if (body && body.schema && body.schema.$ref) {
          bodyClass = R.last(body.schema.$ref.split('/'));
          bodyParam = lowerCaseFirst(bodyClass);
        }

        // body = (operation.detail.parameters || []).filter(
        //   (p: any) => p.in === 'body' && p.schema && p.schema.$ref
        // )[0];
        // if (body) {
        //   bodyClass = R.last(body.schema.$ref.split('/'));
        //   bodyParam = lowerCaseFirst(bodyClass);
        // }
        definitionsUsed.add(bodyClass);
      }

      const queryParams = (operation.detail.parameters || []).filter(
        (p: any) => p.in === 'query'
      );
      const withParam = paramName && operation.endpoint.endsWith('}');
      const methodParams = [];
      if (bodyParam) {
        methodParams.push(`${bodyParam}: ${bodyClass}`);
      }
      if (queryParams.length > 0) {
        const queryParamsClass = `${pascalCase(
          operation.detail.operationId
        )}Parameters`;
        methodParams.push(`queryParams?: ${queryParamsClass}`);
        definitionsUsed.add(queryParamsClass);
      }
      methodParams.push('config?: RestRequestConfig');
      restRequestConfig = true;
      code += `

  /**
   * Operation: ${
     operation.detail.summary || titleCase(operation.detail.operationId)
   }
   * Rate Limit Group: ${operation.detail['x-throttling-group']}
   * Http ${operation.method} ${operation.endpoint}
   */
  async ${smartMethod} (${methodParams.join(
        ', '
      )}): Promise<${responseType}> {${
        withParam
          ? `
    if (this.${paramName} === null) {
      throw new Error('${paramName} must be specified.')
    }
`
          : ''
      }`;
      if (multipart) {
        code += `
    const formData = Utils.getFormData(${bodyParam})
    const r = await this.rc.${operation.method}<${responseType}>(this.path(${
          !withParam && paramName ? 'false' : ''
        }), formData, ${
          queryParams.length > 0 ? 'queryParams' : 'undefined'
        }, config)`;
      } else if (responseType === 'Buffer') {
        code += `
    const r = await this.rc.${operation.method}<${responseType}>(this.path(${
          !withParam && paramName ? 'false' : ''
        })${bodyParam ? `, ${bodyParam}` : ''}, ${
          queryParams.length > 0 ? 'queryParams' : 'undefined'
        }, { ...config, responseType: 'arraybuffer' })`;
      } else {
        code += `
    const r = await this.rc.${operation.method}<${responseType}>(this.path(${
          !withParam && paramName ? 'false' : ''
        })${bodyParam ? `, ${bodyParam}` : ''}, ${
          queryParams.length > 0 ? 'queryParams' : 'undefined'
        }, config)`;
      }
      code += `
    return r.data
  }`;
    });

    if (/\bUtils\./.test(code)) {
      code = `import Utils from '${Array(routes.length + 1)
        .fill('..')
        .join('/')}/Utils'\n${code}`;
    }

    if (definitionsUsed.size > 0) {
      code = `import { ${Array.from(definitionsUsed).join(
        ', '
      )} } from '${Array(routes.length + 1)
        .fill('..')
        .join('/')}/definitions'\n${code}`;
    }
    code += `
}`;

    if (restRequestConfig) {
      code = `import { RestRequestConfig } from '${Array(routes.length + 1)
        .fill('..')
        .join('/')}/Rest'\n${code}`;
    }

    fs.writeFileSync(
      path.join(folderPath, 'index.ts'),
      code.trim() + '\n\nexport default Index\n'
    );

    if (routes.length > 1) {
      patchSrcFile(
        ['paths', ...R.init(routes), 'index.ts'],
        [`import ${R.last(routes)} from './${R.last(routes)}'`],
        `
  ${lowerCaseFirst(R.last(routes)!)} (${
          paramName
            ? `${paramName}: (string | null) = ${
                defaultParamValue ? `'${defaultParamValue}'` : 'null'
              }`
            : ''
        }): ${R.last(routes)} {
    return new ${R.last(routes)}(this${paramName ? `, ${paramName}` : ''})
  }
`.trim()
      );
    }

    generate(`${prefix}${name}/`);
    if (paramName) {
      generate(`${prefix}${name}/{${paramName}}/`);
    }
  })(nextLevels);
};

generate('/');
