import _FormData from 'form-data';

import {Attachment} from './definitions';
import {AxiosResponse} from 'axios';
import delay from 'delay';
import {WsgMeta} from './Wsg';

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
      if (typeof value === 'string') {
        // for browser
        // eslint-disable-next-line no-undef
        value = new Blob([value]);
      }
    }
    super.append(key, value, options);
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static splitWsgData(wsgData: string): [WsgMeta, any] {
    if (wsgData.includes(',--Boundary')) {
      const index = wsgData.indexOf(',--Boundary');
      return [
        JSON.parse(wsgData.substring(1, index)),
        wsgData.substring(index + 1, wsgData.length - 1),
      ];
    } else {
      return JSON.parse(wsgData);
    }
  }
  static formatTraffic(r: AxiosResponse): string {
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

  static getFormData(...objs: {}[]): FormData {
    const formData = new FormData();
    const obj = Object.assign({}, ...objs);
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

  static async waitUntil(
    interval: number,
    times: number,
    condition: () => boolean
  ): Promise<boolean> {
    for (let i = 0; i < times; i++) {
      if (condition()) {
        return true;
      }
      await delay(interval);
    }
    return condition();
  }
}

export default Utils;
