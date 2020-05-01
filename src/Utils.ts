import FormData from 'form-data';

import {Attachment} from './definitions';
import {AxiosResponse} from 'axios';

export class RestResponse {
  data?: any;
  status?: number;
  statusText?: string;
  headers?: any;
}

export class RestRequest {
  method?: string;
  baseURL?: string;
  url?: string;
  data?: string;
  headers?: any;
}

export class RestTraffic {
  axiosResponse: AxiosResponse;
  response: RestResponse;
  request: RestRequest;
  constructor(r: AxiosResponse) {
    this.axiosResponse = r;
    this.response = {
      data: r.data,
      status: r.status,
      statusText: r.statusText,
      headers: r.headers,
    };
    this.request = {
      method: r.config.method,
      baseURL: r.config.baseURL,
      url: r.config.url,
      data: r.config.data,
      headers: r.config.headers,
    };
  }
  toString(): string {
    return `HTTP ${this.axiosResponse.status} ${this.axiosResponse.statusText}${
      this.axiosResponse.data.message
        ? ` - ${this.axiosResponse.data.message}`
        : ''
    }

    Response:
    ${JSON.stringify(this.response, null, 2)}

    Request:
    ${JSON.stringify(this.request, null, 2)}
    `;
  }
}

class Utils {
  static isAttachment(obj: any): boolean {
    return 'filename' in obj && 'content' in obj;
  }

  static getFormData(...objs: any[]): FormData {
    const formData = new FormData({});
    const obj = Object.assign({}, ...objs);
    const jsonRequest: any = {};
    const attachments: Attachment[] = [];
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      if (value === undefined || value === null) {
        continue;
      }
      if (Utils.isAttachment(value)) {
        attachments.push(value);
      }
      if (Array.isArray(value) && Utils.isAttachment(value[0])) {
        attachments.push(...value);
      } else {
        jsonRequest[key] = value;
      }
    }
    formData.append('files[]', JSON.stringify(jsonRequest), {
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
}

export default Utils;
