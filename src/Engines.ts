import axios, {
  Method,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import qs from 'qs';
import RestException from './RestException';
import {TokenInfo} from './definitions';
import {version} from '../package.json';
import delay from 'delay';
import Utils from './Utils';

interface ConstructorOptions {
  server: string;
  clientId?: string;
  clientSecret?: string;
  token?: TokenInfo;
  appName?: string;
  appVersion?: string;
  handleRateLimit?: boolean | number;
  debugMode?: boolean;
}

export class HttpEngine {
  static sandboxServer = 'https://platform.devtest.ringcentral.com';
  static productionServer = 'https://platform.ringcentral.com';

  server: string;
  clientId: string;
  clientSecret: string;
  token?: TokenInfo;
  appName: string;
  appVersion: string;
  handleRateLimit?: boolean | number;
  debugMode?: boolean;

  httpClient: AxiosInstance;

  constructor(options: ConstructorOptions) {
    this.server = options.server;
    this.clientId = options.clientId ?? '';
    this.clientSecret = options.clientSecret ?? '';
    this.token = options.token ?? undefined;
    this.appName = options.appName ?? 'Unknown';
    this.appVersion = options.appVersion ?? '0.0.1';
    this.handleRateLimit = options.handleRateLimit ?? undefined;
    this.debugMode = options.debugMode ?? false;

    this.httpClient = axios.create({
      baseURL: this.server,
      headers: {
        'X-User-Agent': `${this.appName}/${this.appVersion} tylerlong/ringcentral-typescript/${version}`,
      },
      validateStatus: () => {
        return true;
      },
      paramsSerializer: params => {
        return qs.stringify(params, {indices: false});
      },
    });
  }

  async request<T>(
    httpMethod: Method,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: {}
  ): Promise<AxiosResponse<T>> {
    const _config: AxiosRequestConfig = {
      method: httpMethod,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config,
    };
    if (endpoint.startsWith('/restapi/oauth/')) {
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

    if (this.debugMode === true) {
      console.debug(Utils.formatTraffic(r));
    }

    if (r.status >= 200 && r.status < 300) {
      return r;
    } else if (r.status === 429 && this.handleRateLimit) {
      let delayTime = r.headers['x-rate-limit-window'] ?? 60;
      if (typeof this.handleRateLimit === 'number') {
        delayTime = this.handleRateLimit;
      }
      // unsure on level? or if this should be a thrown error?
      console.debug(
        `Hit RingCentral Rate Limit. Pausing requests for ${delayTime} seconds.`
      );
      await delay(delayTime * 1000);
      return this.request<T>(
        httpMethod,
        endpoint,
        content,
        queryParams,
        config
      );
    } else {
      throw new RestException(r);
    }
  }
}
