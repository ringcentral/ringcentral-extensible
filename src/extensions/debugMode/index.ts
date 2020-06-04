import RingCentral from '../..';
import {AxiosResponse, Method} from 'axios';
import {RestRequestConfig} from '../../Rest';
import Utils from '../../Utils';
import SdkExtension from '..';

class DebugModeExtension implements SdkExtension {
  enabled = true;

  constructor(enabled = true) {
    this.enabled = enabled;
  }

  install(rc: RingCentral): void {
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      httpMethod: Method,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig
    ): Promise<AxiosResponse<T>> => {
      const r = await request<T>(
        httpMethod,
        endpoint,
        content,
        queryParams,
        config
      );
      if (this.enabled) {
        console.debug(Utils.formatTraffic(r));
      }
      return r;
    };
  }
}

export default DebugModeExtension;
