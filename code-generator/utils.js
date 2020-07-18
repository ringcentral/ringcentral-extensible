/* eslint-disable node/no-unpublished-require */
const R = require('ramda');
const fs = require('fs');
const path = require('path');

const normalizePath = path => {
  return path
    .replace(/\/restapi\/v1\.0\//, '/restapi/{apiVersion}/')
    .replace(/\/scim\/v2/, '/scim/{version}')
    .replace(/\/\.search/, '/dotSearch');
};
exports.normalizePath = normalizePath;

const deNormalizePath = path => {
  return path
    .replace(/\/restapi\/\{apiVersion\}\//, '/restapi/v1.0/')
    .replace(/\/scim\/\{version\}/, '/scim/v2')
    .replace(/\/dotSearch/, '/.search');
};
exports.deNormalizePath = deNormalizePath;

const getResponseType = responses => {
  const responseSchema = (
    responses[200] ||
    responses[201] ||
    responses[202] ||
    responses[204] ||
    responses[205] ||
    responses[302] ||
    responses.default
  ).schema;
  let responseType;
  if (responseSchema) {
    if (
      responseSchema.type === 'string' &&
      responseSchema.format === 'binary'
    ) {
      responseType = 'Buffer';
    } else if (responseSchema.$ref) {
      responseType = R.last(responseSchema.$ref.split('/'));
    }
  }
  return responseType;
};
exports.getResponseType = getResponseType;

const patchSrcFile = (fileRoutes, imports, extensions) => {
  const filePath = path.join(__dirname, '..', 'src', ...fileRoutes);
  let code = fs.readFileSync(filePath, 'utf8');
  if (imports && imports.length > 0) {
    code = `${imports.join('\n')}\n${code}`;
  }
  if (extensions) {
    code = code.replace(/^}/m, `\n  ${extensions}\n}`);
  }
  console.log(filePath, code);
  fs.writeFileSync(filePath, code);
};
exports.patchSrcFile = patchSrcFile;
