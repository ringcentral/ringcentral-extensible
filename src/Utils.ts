import FormData from 'form-data';

import {Attachment} from './definitions';
import {AxiosResponse} from 'axios';
import delay from 'delay';

class Utils {
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
    const formData = new FormData({});
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
      formData.append('files[]', attachment.content, {
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
