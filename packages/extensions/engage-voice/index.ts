import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import RestException from '@rc-ex/core/lib/RestException';
import axios, {AxiosInstance} from 'axios';
import qs from 'qs';

import {version} from './package.json';
import {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from '@rc-ex/core/lib/Rest';

type EngageVoiceOptions = {
  server?: string;
};

class EngageVoiceExtension extends SdkExtension {
  server: string;
  rc!: RingCentral;
  httpClient!: AxiosInstance;

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
    const r = await this.httpClient.request<T>(_config);
    if (r.status >= 200 && r.status < 300) {
      return r;
    } else {
      throw new RestException(r);
    }
  }

  async authorize() {
    if (this.rc.token?.access_token === undefined) {
      throw new Error('Need a RingCentral access token to continue');
    }
    const r = await this.request(
      'POST',
      '/api/auth/login/rc/accesstoken',
      qs.stringify({
        rcTokenType: 'Bearer',
        rcAccessToken: this.rc.token?.access_token,
      })
    );
    console.log(r.data);
  }
}

export default EngageVoiceExtension;
