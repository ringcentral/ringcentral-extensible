import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import RestException from '@rc-ex/core/lib/RestException';
import axios, {AxiosInstance} from 'axios';

import {version} from './package.json';
import {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from '@rc-ex/core/lib/Rest';
import {AccessTokenUserDetails} from './definitions';

type EngageVoiceOptions = {
  server?: string;
};

class EngageVoiceExtension extends SdkExtension {
  server: string;
  rc!: RingCentral;
  httpClient!: AxiosInstance;
  token?: AccessTokenUserDetails;

  constructor(options?: EngageVoiceOptions) {
    super();
    this.server = options?.server ?? 'https://engage.ringcentral.com';
  }

  async install(rc: RingCentral) {
    this.rc = rc;
    this.httpClient = axios.create({
      baseURL: this.server,
      headers: {
        'X-User-Agent': `${this.rc.rest.appName}/${this.rc.rest.appVersion} ringcentral-extensible/engage-voice/${version}`,
      },
      validateStatus: () => {
        return true;
      },
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
    if (
      endpoint !== '/api/auth/login/rc/accesstoken' &&
      this.token?.accessToken
    ) {
      _config.headers = {
        ..._config.headers,
        Authorization: `Bearer ${this.token?.accessToken}`,
      };
    }
    const r = await this.httpClient.request<T>(_config);
    if (r.status >= 200 && r.status < 300) {
      return r;
    } else {
      throw new RestException(r);
    }
  }

  async get<T>(endpoint: string, queryParams?: {}, config?: RestRequestConfig) {
    return this.request<T>('GET', endpoint, undefined, queryParams, config);
  }
  async delete<T>(
    endpoint: string,
    queryParams?: {},
    config?: RestRequestConfig
  ) {
    return this.request<T>('DELETE', endpoint, undefined, queryParams, config);
  }
  async post<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ) {
    return this.request<T>('POST', endpoint, content, queryParams, config);
  }
  async put<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ) {
    return this.request<T>('PUT', endpoint, content, queryParams, config);
  }
  async patch<T>(
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ) {
    return this.request<T>('PATCH', endpoint, content, queryParams, config);
  }

  async authorize(): Promise<AccessTokenUserDetails> {
    if (this.rc.token?.access_token === undefined) {
      throw new Error('Need a RingCentral access token to continue');
    }
    const r = await this.post<AccessTokenUserDetails>(
      '/api/auth/login/rc/accesstoken',
      undefined,
      {
        rcTokenType: 'Bearer',
        rcAccessToken: this.rc.token?.access_token,
      }
    );
    this.token = r.data;
    return this.token!;
  }
}

export default EngageVoiceExtension;
