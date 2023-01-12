import { Stream } from 'stream';

class FormFile {
  filename: string;

  contentType: string;

  content: string | Buffer | Blob | NodeJS.ReadableStream;

  constructor(filename: string, contentType: string, content: string | Buffer | Blob | NodeJS.ReadableStream) {
    this.filename = filename;
    this.contentType = contentType;
    this.content = content;
  }
}

async function stream2buffer(stream: Stream): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const buf = Array<any>();
    stream.on('data', (chunk) => buf.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(buf)));
    stream.on('error', (err) => reject(new Error(`error converting stream - ${err}`)));
  });
}

export const boundary = 'ad05fc42-a66d-4a94-b807-f1c91136c17b';
class FormData {
  files: FormFile[] = [];

  append(fileName: string, contentType: string, content: string | Buffer | Blob | NodeJS.ReadableStream) {
    this.files.push(new FormFile(fileName, contentType, content));
  }

  async getBody() {
    let formData = Buffer.alloc(0);
    for (const formFile of this.files) {
      const { filename: fileName, contentType, content } = formFile;
      let temp = `--${boundary}\r\n`;
      temp += `Content-Type: ${contentType}\r\n`;
      temp += `Content-Disposition: form-data; name="attachment"; filename="${fileName}"\r\n\r\n`;
      formData = Buffer.concat([formData, Buffer.from(temp, 'utf-8')]);
      let fileBuffer = Buffer.alloc(0);
      if (typeof content === 'string') {
        fileBuffer = Buffer.from(`${content}\r\n`, 'utf-8');
      } else if (Buffer.isBuffer(content)) {
        fileBuffer = content;
      } else if (content instanceof Blob) {
        fileBuffer = Buffer.from(await content.arrayBuffer());
      } else {
        // NodeJS.ReadableStream
        fileBuffer = await stream2buffer(content);
      }
      formData = Buffer.concat([formData, fileBuffer]);
    }
    const payload = Buffer.concat([
      formData,
      Buffer.from(`\r\n--${boundary}--\r\n`, 'utf8'),
    ]);
    return payload;
  }
}

export default FormData;
