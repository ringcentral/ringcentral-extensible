const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const { pascalCase } = require('change-case')
const R = require('ramda')

const outputDir = path.join(__dirname, '..', 'src', 'definitions')

const doc = yaml.safeLoad(fs.readFileSync(process.env.PATH_TO_SWAGGER_SPEC, 'utf8'))
const definitions = doc.definitions
const models = Object.keys(definitions).map(k => ({ name: k, ...definitions[k] }))
  .filter(m => m.type !== 'array')

const keys = []
models.forEach(m => {
  Object.keys(m).forEach(k => keys.push(k))
})

const normalizeType = f => {
  if (f.type === 'integer' || f.type === 'number') {
    return 'number'
  } else if (f.type === 'array') {
    return `${normalizeType(f.items)}[]`
  } else if (f.type === undefined || f.type === 'object') {
    return f.$ref.split('/').slice(-1)[0]
  } else if (f.type === 'boolean') {
    return 'boolean'
  } else if (f.type === 'file') {
    return 'Attachment'
  } else if (f.type === 'string') {
    if (f.enum) {
      return `(${f.enum.map(i => `'${i.replace(/'/g, '\\\'')}'`).join(' | ')})`
    } else {
      return 'string'
    }
  } else {
    throw new Error(`Unknown type ${f.type}`)
  }
}

const normalizeField = f => {
  f.type = normalizeType(f)
  return f
}

const generateField = (m, f) => {
  let p = ''
  if (f.name.includes('-') || f.name.includes(':') || f.name.includes('.')) {
    p = `'${f.name}'?: ${f.type}`
  } else {
    p = `${f.name}?: ${f.type}`
  }

  p = ` */\n  ${p}`
  if (f.default) {
    p = ` * Default: ${f.default}\n  ${p}`
  }
  if (f.minimum) {
    p = ` * Minimum: ${f.minimum}\n  ${p}`
  }
  if (f.maximum) {
    p = ` * Maximum: ${f.maximum}\n  ${p}`
  }
  if (m.required && m.required.includes(f.name)) {
    p = ` * Required\n  ${p}`
  }
  if (f.description) {
    p = `${f.description.trim().split('\n').map(l => ` * ${l.trim()}`).join('\n  ')}\n  ${p}`
  }
  p = `/**\n  ${p}`
  return p
}

const generateCode = (m, fields) => {
  let code = `${m.description ? '\n  // ' + m.description : ''}
class ${m.name} {
  ${fields.join('\n\n  ')}
}

export default ${m.name}`
  const match = code.match(/(?<=^ {2}\S+?: )[A-Z][A-Za-z]+?\b/gm)
  if (match !== null) {
    code = `import { ${R.pipe(R.uniq, R.without([m.name]))(match).join(', ')} } from '.'\n${code}`
  }
  return code
}

models.forEach(m => {
  const properties = m.properties
  console.log(m)
  const fields = Object.keys(properties)
    .map(k => ({ name: k, ...properties[k] }))
    .map(f => normalizeField(f))
    .map(f => generateField(m, f))
  fs.writeFileSync(path.join(outputDir, `${m.name}.ts`), generateCode(m, fields).trim() + '\n')
})

// generate models for form-data objects
Object.keys(doc.paths).forEach(p => {
  Object.keys(doc.paths[p]).forEach(method => {
    const operation = doc.paths[p][method]
    if ((operation.parameters || []).some(p => p.in === 'formData')) {
      const operationId = operation.operationId
      const className = pascalCase(operationId) + 'Request'
      const fields = operation.parameters.filter(p => p.in === 'formData')
        .map(p => {
          p = normalizeField(p)
          if (p.$ref) {
            p.type = p.$ref.split('/').slice(-1)[0]
          }
          return generateField({}, p)
        })
      fs.writeFileSync(path.join(outputDir, `${className}.ts`), generateCode({ name: className }, fields).trim() + '\n')
    }
  })
})

// generate models for query parameters
Object.keys(doc.paths).forEach(p => {
  Object.keys(doc.paths[p]).forEach(method => {
    const operation = doc.paths[p][method]
    if ((operation.parameters || []).some(p => p.in === 'query')) {
      const operationId = operation.operationId
      const className = pascalCase(operationId) + 'Parameters'
      const fields = operation.parameters.filter(p => p.in === 'query')
        .map(p => {
          p = normalizeField(p)
          return generateField({}, p)
        })
      fs.writeFileSync(path.join(outputDir, `${className}.ts`), generateCode({ name: className }, fields).trim() + '\n')
    }
  })
})

// Generate Attachment
fs.writeFileSync(path.join(outputDir, 'Attachment.ts'), `class Attachment {
  /**
   * File name with extension, such as 'example.png'
   */
  filename?: string

  /**
   * Binary content of the file
   */
  content?: string | Buffer | Blob | NodeJS.ReadableStream

  /**
   * Content tyle of the file, such as 'image/png'
   */
  contentType?: string
}

export default Attachment
`)

const defintionFiles = fs.readdirSync(outputDir).map(df => df.substring(0, df.length - 3))
const code = defintionFiles.map(df => `export { default as ${df} } from './${df}'`).join('\n')
fs.writeFileSync(path.join(outputDir, 'index.ts'), code + '\n')
