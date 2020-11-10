import RingCentral from '@rc-ex/core';
import {
  RestRequestConfig,
  RestResponse,
  RestMethod,
} from '@rc-ex/core/lib/Rest';
import Utils from '@rc-ex/core/lib/Utils';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';

export type DebugOptions = {
  loggingAction?: (message: string) => void;
};

class DebugExtension extends SdkExtension {
  options: DebugOptions;

  constructor(options: DebugOptions = {}) {
    super();
    this.options = options;
    this.options.loggingAction ??= message => console.debug(message);
  }

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
      this.options.loggingAction!(Utils.formatTraffic(r));
      return r;
    };
  }
}

export default DebugExtension;
