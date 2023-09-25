import FormData from './FormData';

import type Attachment from './definitions/Attachment';
import type { RestResponse } from './types';

class Utils {
  public static formatTraffic(r: RestResponse): string {
    return `HTTP ${r.status} ${r.statusText}${r.data.message ? ` - ${r.data.message}` : ''}

    Response:
    ${JSON.stringify(
      {
        data: r.data,
        status: r.status,
        statusText: r.statusText,
        headers: r.headers,
      },
      null,
      2,
    )}

    Request:
    ${JSON.stringify(
      {
        method: r.config.method,
        baseURL: r.config.baseURL,
        url: r.config.url,
        params: r.config.params,
        data: Buffer.isBuffer(r.config.data) ? '<Buffer>' : r.config.data,
        headers: r.config.headers,
      },
      null,
      2,
    )}
    `;
  }

  public static isAttachment(obj: {}): boolean {
    return typeof obj === 'object' && obj !== null && 'filename' in obj && 'content' in obj;
  }

  public static getFormData(...objects: {}[]): Promise<Buffer> {
    const formData = new FormData();
    const obj = Object.assign({}, ...objects);
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      if (value === undefined || value === null) {
        delete obj[key];
        continue;
      }
      if (Utils.isAttachment(value)) {
        const attachment = value as Attachment;
        formData.append({
          name: key,
          filename: attachment.filename!,
          contentType: attachment.contentType!,
          content: attachment.content!,
        });
        delete obj[key];
        continue;
      }
      if (Array.isArray(value) && Utils.isAttachment(value[0])) {
        for (const attachment of value) {
          formData.append({
            name: key,
            filename: attachment.filename!,
            contentType: attachment.contentType!,
            content: attachment.content!,
          });
        }
        delete obj[key];
      }
    }
    if (Object.keys(obj).length > 0) {
      formData.prepend({
        name: 'request.json',
        filename: 'request.json',
        contentType: 'application/json',
        content: JSON.stringify(obj),
      });
    }
    return formData.getBody();
  }
}

export default Utils;
