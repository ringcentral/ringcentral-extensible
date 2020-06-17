import {AxiosResponse, Method} from 'axios';

import RingCentral from '../..';
import {RestRequestConfig} from '../../Rest';
import Utils from '../../Utils';
import SdkExtension from '..';

class DebugModeExtension extends SdkExtension {
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
      const r = await request<T>(
        httpMethod,
        endpoint,
        content,
        queryParams,
        config
      );
      console.debug(Utils.formatTraffic(r));
      return r;
    };
  }
}

export default DebugModeExtension;
