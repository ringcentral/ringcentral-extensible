import type { FormFile } from "./types.js";

function concat(arrays: Uint8Array[]): Uint8Array {
  let totalLength = 0;
  for (const arr of arrays) {
    totalLength += arr.length;
  }
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

async function stream2Uint8Array(
  stream: AsyncIterable<Uint8Array>,
): Promise<Uint8Array> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return concat(chunks);
}

export const boundary = "ad05fc42-a66d-4a94-b807-f1c91136c17b";
class FormData {
  public files: FormFile[] = [];

  public append(formFile: FormFile) {
    this.files.push(formFile);
  }

  public prepend(formFile: FormFile) {
    this.files.unshift(formFile);
  }

  public async getBody() {
    let buffer: Uint8Array = new Uint8Array(0);
    const encoder = new TextEncoder();
    for (const formFile of this.files) {
      if (buffer.length > 0) {
        buffer = concat([buffer, encoder.encode("\r\n")]);
      }
      let temp = `--${boundary}\r\n`;
      temp += `Content-Type: ${formFile.contentType}\r\n`;
      temp +=
        `Content-Disposition: form-data; name="${formFile.name}"; filename="${formFile.filename}"\r\n\r\n`;
      buffer = concat([buffer, encoder.encode(temp)]);
      let fileBuffer: Uint8Array;
      if (typeof formFile.content === "string") {
        fileBuffer = encoder.encode(formFile.content);
      } else if (formFile.content instanceof Uint8Array) {
        fileBuffer = formFile.content;
      } else if (formFile.content instanceof Blob) {
        fileBuffer = new Uint8Array(await formFile.content.arrayBuffer());
      } else {
        fileBuffer = await stream2Uint8Array(
          formFile.content as AsyncIterable<Uint8Array>,
        );
      }
      buffer = concat([buffer, fileBuffer]);
    }
    return concat([
      buffer,
      encoder.encode(`\r\n--${boundary}--\r\n`),
    ]);
  }
}

export default FormData;
