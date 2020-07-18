import axios, {
  Method,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import qs from 'qs';
import FormData from 'form-data';

import RestException from './RestException';
import {TokenInfo} from './definitions';
import {version} from './package.json';

export type RestOptions = {
  server?: string;
  clientId?: string;
  clientSecret?: string;
  token?: TokenInfo;
  appName?: string;
  appVersion?: string;
};

export type RestMethod = Method;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RestResponse<T = any> = AxiosResponse;
export type RestRequestConfig = AxiosRequestConfig;

export default class Rest {
  static sandboxServer = 'https://platform.devtest.ringcentral.com';
  static productionServer = 'https://platform.ringcentral.com';

  server: string;
  clientId: string;
  clientSecret: string;
  token?: TokenInfo;
  appName: string;
  appVersion: string;

  httpClient: AxiosInstance;

  constructor(options: RestOptions) {
    this.server = options.server ?? Rest.sandboxServer;
    this.clientId = options.clientId ?? '';
    this.clientSecret = options.clientSecret ?? '';
    this.token = options.token ?? undefined;
    this.appName = options.appName ?? 'Unknown';
    this.appVersion = options.appVersion ?? '0.0.1';

    this.httpClient = axios.create({
      baseURL: this.server,
      headers: {
        'X-User-Agent': `${this.appName}/${this.appVersion} ringcentral-extensible/core/${version}`,
      },
      validateStatus: () => {
        return true;
      },
      paramsSerializer: params => {
        return qs.stringify(params, {indices: false});
      },
    });

    this.httpClient.interceptors.request.use(config => {
      if (config.data instanceof FormData && config.data.getHeaders) {
        return {
          ...config,
          headers: {...config.headers, ...config.data.getHeaders()},
        };
      }
      return config;
    });
  }

  async request<T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<RestResponse<T>> {
    const _config: RestRequestConfig = {
      method,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config,
    };
    // /restapi/oauth/wstoken uses bearer token
    if (
      endpoint === '/restapi/oauth/token' ||
      endpoint === '/restapi/oauth/revoke'
    ) {
      // basic token
      _config.auth = {
        username: this.clientId,
        password: this.clientSecret,
      };
      _config.data = qs.stringify(_config.data);
    } else {
      // bearer token
      _config.headers = {
        ..._config.headers,
        Authorization: `Bearer ${this.token?.access_token}`,
      };
    }
    const r = await this.httpClient.request<T>(_config);

    if (r.status >= 200 && r.status < 300) {
      return r;
    } else {
      throw new RestException(r);
    }
  }
}
