import RingCentral from '../..';
import {RestRequestConfig, RestResponse, RestMethod} from '../../Rest';
import Utils from '../../Utils';
import SdkExtension from '..';

class DebugModeExtension extends SdkExtension {
  install(rc: RingCentral): void {
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request<T>(method, endpoint, content, queryParams, config);
      }
      const r = await request<T>(
        method,
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
