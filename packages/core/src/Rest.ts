import type { AxiosInstance } from "axios";
import axios from "axios";
import qs from "qs";

import { boundary } from "./FormData.js";
import RestException from "./RestException.js";
import type TokenInfo from "./definitions/TokenInfo.js";
import type {
  RestMethod,
  RestOptions,
  RestRequestConfig,
  RestResponse,
} from "./types.js";

const version = "1.6.x";

export default class Rest {
  public static sandboxServer = "https://platform.devtest.ringcentral.com";

  public static productionServer = "https://platform.ringcentral.com";

  public server: string;

  public clientId: string;

  public clientSecret?: string;

  public token?: TokenInfo;

  public appName: string;

  public appVersion: string;

  public httpClient: AxiosInstance;

  public constructor(options: RestOptions) {
    this.server = options.server ?? Rest.productionServer;
    this.clientId = options.clientId ?? "";
    this.clientSecret = options.clientSecret;
    this.token = options.token ?? undefined;
    this.appName = options.appName ?? "Unknown";
    this.appVersion = options.appVersion ?? "0.0.1";

    this.httpClient = axios.create({
      headers: {
        "X-User-Agent":
          `${this.appName}/${this.appVersion} ringcentral-extensible/core/${version}`,
      },
      validateStatus: () => true,
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
      },
    });

    this.httpClient.interceptors.request.use((config) => {
      if (Buffer.isBuffer(config.data)) {
        return {
          ...config,
          headers: {
            ...config.headers,
            "Content-Type": `multipart/form-data; boundary=${boundary}`,
          } as any,
        };
      }
      return config;
    });
  }

  public async request<T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>> {
    const newConfig: RestRequestConfig = {
      baseURL: this.server,
      method,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config,
    };
    // /restapi/oauth/wstoken uses bearer token
    if (
      endpoint === "/restapi/oauth/token" ||
      endpoint === "/restapi/oauth/revoke"
    ) {
      if (this.clientSecret) {
        // basic token
        newConfig.auth = {
          username: this.clientId,
          password: this.clientSecret,
        };
      }
      // else: PKCE: https://medium.com/ringcentral-developers/use-authorization-code-pkce-for-ringcentral-api-in-client-app-e9108f04b5f0
      newConfig.data = qs.stringify(newConfig.data);
    } else {
      // bearer token
      newConfig.headers = {
        ...newConfig.headers,
        Authorization: `Bearer ${this.token?.access_token}`,
      } as any;
    }
    const r = await this.httpClient.request<T>(newConfig);

    if (r.status >= 200 && r.status < 300) {
      return r;
    }
    throw new RestException(r);
  }
}
