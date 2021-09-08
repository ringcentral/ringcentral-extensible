import fs from 'fs';
import path from 'path';
import {spawnSync} from 'child_process';
// eslint-disable-next-line node/no-unpublished-import
import {pascalCase} from 'change-case';

const typesSet = new Set();
type Type = {
  type: string;
  $ref?: string;
  items?: Type;
};
const normalizeType = (prop: Type): string => {
  if (prop.$ref) {
    const type = pascalCase(prop.$ref.split('/').slice(-1)[0]);
    typesSet.add(type);
    return type;
  }
  if (prop.type === 'integer') {
    return 'number';
  }
  if (prop.type === 'array') {
    return normalizeType(prop.items!) + '[]';
  }
  return prop.type;
};

let jsonString = fs.readFileSync(
  process.env.PATH_TO_ENGAGE_VOICE_SWAGGER_SPEC!,
  'utf-8'
);
const doc = JSON.parse(jsonString);

// delete unused schemas
let deleted = true;
while (deleted) {
  deleted = false;
  const schemas = doc.components.schemas;
  for (const schemaName of Object.keys(schemas)) {
    if (!jsonString.includes(`schemas/${schemaName}"`)) {
      deleted = true;
      delete schemas[schemaName];
      console.log('deleted unused schema ', schemaName);
    }
  }
  jsonString = JSON.stringify(doc, null, 2);
}

// doing some sanity check
const schemas = doc.components.schemas;
for (const schemaName of Object.keys(schemas)) {
  const schema = schemas[schemaName];
  if (schema.type !== 'object' && schema.type !== undefined) {
    console.log('Found a schema which is not an object:', schemaName, schema);
  }
  if (schema.properties === undefined) {
    console.log('Found schema without properties', schemaName, schema);
  }
}

const outputDir = path.join(__dirname, 'definitions');
spawnSync('rm', ['-rf', outputDir]);
spawnSync('mkdir', [outputDir]);

// generate definitions
for (const name of Object.keys(schemas)) {
  console.log(name);
  const className = pascalCase(name);
  let code = `class ${className} {`;
  const schema = schemas[name];
  for (const propName of Object.keys(schema.properties ?? {})) {
    const prop = schema.properties[propName];
    code += `
  ${propName}?: ${normalizeType(prop)};
`;
  }
  code += `
}

export default ${className};`;
  typesSet.delete(className);
  if (typesSet.size > 0) {
    code = `import {${Array.from(typesSet).join(', ')}} from './index';

${code}
`;
  }
  typesSet.clear();
  fs.writeFileSync(path.join(outputDir, `${className}.ts`), code);
}

// generate definitions/index.ts
const definitionFiles = fs
  .readdirSync(outputDir)
  .map(df => df.substring(0, df.length - 3));
const code = definitionFiles
  .map(df => `export {default as ${df}} from './${df}';`)
  .join('\n');
fs.writeFileSync(path.join(outputDir, 'index.ts'), code + '\n');
