import type RingCentral from "@rc-ex/core";
import RestException from "@rc-ex/core/RestException";
import SdkExtension from "@rc-ex/core/SdkExtension";
import type {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from "@rc-ex/core/types";
import type { SDK } from "@ringcentral/sdk";

export interface RcSdkOptions {
  rcSdk: SDK;
}

const fetchWrappedSdks = new WeakSet<SDK>();

function isNode() {
  return typeof process !== "undefined" && Boolean(process.versions?.node);
}

function wrapSdkFetchForNode(rcSdk: SDK) {
  if (!isNode() || fetchWrappedSdks.has(rcSdk)) {
    return;
  }
  const externals = rcSdk.externals();
  const originalFetch = externals.fetch as (
    request: Request,
    init?: RequestInit,
  ) => Promise<Response>;
  externals.fetch = (request: Request, init?: RequestInit) => {
    // node-fetch 2.7 uses Node's keep-alive agent by default; RingCentral's
    // chunked gzip responses can otherwise emit Premature close after success.
    request.headers.set("Connection", "close");
    return originalFetch(request, init);
  };
  fetchWrappedSdks.add(rcSdk);
}

class RcSdkExtension extends SdkExtension {
  public options: RcSdkOptions;

  public constructor(options: RcSdkOptions) {
    super();
    this.options = options;
    wrapSdkFetchForNode(options.rcSdk);
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

  public async revoke(): Promise<void> {}
}

export default RcSdkExtension;
