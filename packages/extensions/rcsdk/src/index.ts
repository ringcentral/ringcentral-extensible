import type RingCentral from "@rc-ex/core";
import type {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from "@rc-ex/core/lib/types";
import SdkExtension from "@rc-ex/core/lib/SdkExtension";
import RestException from "@rc-ex/core/lib/RestException";
import type SDK from "@ringcentral/sdk";

export interface RcSdkOptions {
  rcSdk: SDK;
}

class RcSdkExtension extends SdkExtension {
  public options: RcSdkOptions;

  public constructor(options: RcSdkOptions) {
    super();
    this.options = options;
  }

  public async install(rc: RingCentral) {
    Object.defineProperty(rc, "token", {
      get: async () => this.options.rcSdk.platform().auth().data(),
    });
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig,
      // eslint-disable-next-line max-params
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request(method, endpoint, content, queryParams, config);
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
        } as any,
      };
      if (r.ok) {
        return response;
      }
      throw new RestException(response);
    };
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async revoke(): Promise<void> {}
}

export default RcSdkExtension;
