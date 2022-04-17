import RingCentral from '@rc-ex/core';
import {
  RestRequestConfig,
  RestResponse,
  RestMethod,
} from '@rc-ex/core/lib/Rest';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import RestException from '@rc-ex/core/lib/RestException';
import SDK from '@ringcentral/sdk';

export type RcSdkOptions = {
  rcSdk: SDK;
};

class RcSdkExtension extends SdkExtension {
  options: RcSdkOptions;

  constructor(options: RcSdkOptions) {
    super();
    this.options = options;
  }

  async install(rc: RingCentral) {
    Object.defineProperty(rc, 'token', {
      get: async () => this.options.rcSdk.platform().auth().data(),
    });
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig,
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request<T>(method, endpoint, content, queryParams, config);
      }
      const r = await this.options.rcSdk.send({
        method,
        url: endpoint,
        body: content,
        query: queryParams,
        headers: config?.headers,
      });
      const response: RestResponse = {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers as unknown as Record<string, string>,
        config: {
          method,
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

export default RcSdkExtension;
