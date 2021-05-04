import {parsed} from 'ringcentral-open-api-parser';
import fs from 'fs';
import path from 'path';
import {Field} from 'ringcentral-open-api-parser/lib/types';
import {spawnSync} from 'child_process';
import R from 'ramda';

const outputDir = path.join(
  __dirname,
  '..',
  '..',
  'packages',
  'core',
  'definitions'
);
spawnSync('rm', ['-rf', outputDir]);
spawnSync('mkdir', [outputDir]);

const normalizeField = (f: Field): Field => {
  if (f.$ref) {
    f.type = f.$ref;
  } else if (f.type === 'integer' || f.type === 'number') {
    f.type = 'number';
  } else if (f.type === 'array') {
    f.type = `${normalizeField(f.items!).type}[]`;
  } else if (f.type === 'boolean') {
    f.type = 'boolean';
  } else if (f.type === 'string') {
    f.type = 'string';
    if (f.enum) {
      f.type = `(${f.enum
        .map((i: string) => `'${i.replace(/'/g, "\\'")}'`)
        .join(' | ')})`;
    }
  } else if (f.type === 'byte[]') {
    f.type = 'string | Buffer | Blob | NodeJS.ReadableStream';
  } else {
    throw new Error(`Unknown type ${f.type}`);
  }
  return f;
};

const generateField = (f: Field) => {
  f = normalizeField(f);
  let p = '';
  if (f.name.includes('-') || f.name.includes(':') || f.name.includes('.')) {
    p = `'${f.name}'?: ${f.type};`;
  } else {
    p = `${f.name}?: ${f.type};`;
  }

  p = ` */\n  ${p}`;
  if (f.default) {
    p = ` * Default: ${f.default}\n  ${p}`;
  }
  if (f.example) {
    p = ` * Example: ${f.example}\n  ${p}`;
  }
  if (f.format) {
    p = ` * Format: ${f.format}\n  ${p}`;
  }
  if (f.minimum) {
    p = ` * Minimum: ${f.minimum}\n  ${p}`;
  }
  if (f.maximum) {
    p = ` * Maximum: ${f.maximum}\n  ${p}`;
  }
  if (f.required) {
    p = ` * Required\n  ${p}`;
  }
  if (f.description) {
    p = ` * ${f.description.trim().split('\n').join('\n *  ')}\n  ${p}`;
  }
  p = `/**\n  ${p}`;
  return p;
};

parsed.models.forEach(model => {
  let code = `${model.description ? `// ${model.description}\n` : ''}class ${
    model.name
  } {
  ${model.fields.map(f => generateField(f)).join('\n\n  ')}
}

export default ${model.name};
`;

  // imports
  const match = code.match(/(?<=^ {2}\S+?: )[A-Z][A-Za-z]+?\b/gm) as any;
  if (match !== null) {
    code = `import {${R.without([model.name], R.uniq(match)).join(
      ', '
    )}} from './index';\n\n${code}`;
  }

  fs.writeFileSync(path.join(outputDir, `${model.name}.ts`), code);
});
