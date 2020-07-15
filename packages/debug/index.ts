import RingCentral from '@ringcentral-extensible/core';
import {
  RestRequestConfig,
  RestResponse,
  RestMethod,
} from '@ringcentral-extensible/core/Rest';
import Utils from '@ringcentral-extensible/core/Utils';
import SdkExtension from '@ringcentral-extensible/core/extensions';

class DebugModeExtension extends SdkExtension {
  async install(rc: RingCentral) {
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
