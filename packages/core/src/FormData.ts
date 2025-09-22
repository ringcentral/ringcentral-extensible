import type { Stream } from "stream";

import type { FormFile } from "./types.js";

async function stream2buffer(stream: Stream): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const buf = Array<any>();
    stream.on("data", (chunk) => buf.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(buf)));
    stream.on(
      "error",
      (err) => reject(new Error(`error converting stream - ${err}`)),
    );
  });
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
    let buffer = Buffer.alloc(0);
    for (const formFile of this.files) {
      if (buffer.length > 0) {
        buffer = Buffer.concat([buffer, Buffer.from("\r\n", "utf-8")]);
      }
      let temp = `--${boundary}\r\n`;
      temp += `Content-Type: ${formFile.contentType}\r\n`;
      temp +=
        `Content-Disposition: form-data; name="${formFile.name}"; filename="${formFile.filename}"\r\n\r\n`;
      buffer = Buffer.concat([buffer, Buffer.from(temp, "utf-8")]);
      let fileBuffer: Buffer;
      if (typeof formFile.content === "string") {
        fileBuffer = Buffer.from(formFile.content, "utf-8");
      } else if (Buffer.isBuffer(formFile.content)) {
        fileBuffer = formFile.content;
      } else if (formFile.content instanceof Blob) {
        fileBuffer = Buffer.from(await formFile.content.arrayBuffer());
      } else {
        // NodeJS.ReadableStream
        fileBuffer = await stream2buffer(
          formFile.content as unknown as Stream,
        );
      }
      buffer = Buffer.concat([buffer, fileBuffer]);
    }
    return Buffer.concat([
      buffer,
      Buffer.from(`\r\n--${boundary}--\r\n`, "utf8"),
    ]);
  }
}

export default FormData;
