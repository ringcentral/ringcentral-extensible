// eslint-disable-next-line node/no-unpublished-import
import SDK from '@ringcentral/sdk';

import RingCentral from '../..';
import {AxiosResponse, Method} from 'axios';
import {RestRequestConfig} from '../../Rest';
import SdkExtension from '..';
import RestException from '../../RestException';

class RingCentralExtension extends SdkExtension {
  sdk: SDK;

  constructor(sdk: SDK) {
    super();
    this.sdk = sdk;
  }

  install(rc: RingCentral): void {
    rc.request = async <T>(
      httpMethod: Method,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig
    ): Promise<AxiosResponse<T>> => {
      const r = await this.sdk.send({
        method: httpMethod,
        url: endpoint,
        body: content,
        query: queryParams,
        headers: config?.headers,
      });
      const response: AxiosResponse = {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers,
        config: {
          method: httpMethod,
          baseURL: r.url.split(endpoint)[0],
          url: endpoint,
          data: content,
          params: queryParams,
        },
      };
      if (r.ok) {
        return response;
      }
      throw new RestException(response);
    };
  }
}

export default RingCentralExtension;
