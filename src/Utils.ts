import _FormData from 'form-data';

import {Attachment} from './definitions';
import {RestResponse} from './Rest';

class FormData extends _FormData {
  readableParts: string[] = [];
  toJSON(): string {
    return this.readableParts.join('\n');
  }
  append(
    key: string,
    value: string | Buffer | Blob | NodeJS.ReadableStream,
    options?: {filename?: string; contentType?: string}
  ): void {
    this.readableParts.push(
      JSON.stringify({
        ...options,
        content: typeof value === 'string' ? value : '<binary data>',
      })
    );
    if (typeof Blob !== 'undefined') {
      // for browser
      if (typeof value === 'string') {
        // plain text file
        // eslint-disable-next-line no-undef
        value = new Blob([value], {type: options?.contentType});
      }
      super.append(key, value, options?.filename);
    } else {
      super.append(key, value, options);
    }
  }
  getHeaders(): {} {
    if (super.getHeaders !== undefined) {
      // for node
      return super.getHeaders();
    }
    // for browser
    return {};
  }
}

class Utils {
  static formatTraffic(r: RestResponse): string {
    return `HTTP ${r.status} ${r.statusText}${
      r.data.message ? ` - ${r.data.message}` : ''
    }

    Response:
    ${JSON.stringify(
      {
        data: r.data,
        status: r.status,
        statusText: r.statusText,
        headers: r.headers,
      },
      null,
      2
    )}

    Request:
    ${JSON.stringify(
      {
        method: r.config.method,
        baseURL: r.config.baseURL,
        url: r.config.url,
        params: r.config.params,
        data: r.config.data,
        headers: r.config.headers,
      },
      null,
      2
    )}
    `;
  }

  static isAttachment(obj: {}): boolean {
    return 'filename' in obj && 'content' in obj;
  }

  static getFormData(...objects: {}[]): FormData {
    const formData = new FormData();
    const obj = Object.assign({}, ...objects);
    const attachments: Attachment[] = [];
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      if (value === undefined || value === null) {
        delete obj[key];
        continue;
      }
      if (Utils.isAttachment(value)) {
        attachments.push(value);
        delete obj[key];
        continue;
      }
      if (Array.isArray(value) && Utils.isAttachment(value[0])) {
        attachments.push(...value);
        delete obj[key];
      }
    }
    formData.append('files[]', JSON.stringify(obj), {
      filename: 'request.json',
      contentType: 'application/json',
    });
    for (const attachment of attachments) {
      formData.append('files[]', attachment.content!, {
        filename: attachment.filename,
        contentType: attachment.contentType,
      });
    }
    return formData;
  }
}

export default Utils;
