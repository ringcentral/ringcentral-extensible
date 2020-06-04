import waitFor from 'wait-for-async';

import RingCentral from '../..';
import {AxiosResponse, Method} from 'axios';
import {RestRequestConfig} from '../../Rest';
import SdkExtension from '..';
import RestException from '../../RestException';

class RateLimitExtension extends SdkExtension {
  install(rc: RingCentral): void {
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      httpMethod: Method,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig
    ): Promise<AxiosResponse<T>> => {
      if (!this.enabled) {
        return request<T>(httpMethod, endpoint, content, queryParams, config);
      }
      // eslint-disable-next-line no-constant-condition
      while (true) {
        try {
          const r = await request<T>(
            httpMethod,
            endpoint,
            content,
            queryParams,
            config
          );
          return r;
        } catch (e) {
          if (e instanceof RestException) {
            if (e.response.status === 429) {
              const delaySeconds =
                e.response.headers['x-rate-limit-window'] ?? 60;
              await waitFor({interval: delaySeconds * 1000});
              continue;
            }
          }
          throw e;
        }
      }
    };
  }
}

export default RateLimitExtension;
