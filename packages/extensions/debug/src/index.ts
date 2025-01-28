import type RingCentral from "@rc-ex/core/index";
import type {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from "@rc-ex/core/types";
import Utils from "@rc-ex/core/Utils";
import SdkExtension from "@rc-ex/core/SdkExtension";

export interface DebugOptions {
  loggingAction?: (message: string) => void;
}

class DebugExtension extends SdkExtension {
  public options: DebugOptions;

  public constructor(options: DebugOptions = {}) {
    super();
    this.options = options;
    this.options.loggingAction ??= (message) => console.debug(message);
  }

  public async install(rc: RingCentral) {
    const request: typeof rc.request = rc.request.bind(rc);
    rc.request = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig,
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request(method, endpoint, content, queryParams, config);
      }
      const r = await request<T>(
        method,
        endpoint,
        content,
        queryParams,
        config,
      );
      this.options.loggingAction!(Utils.formatTraffic(r));
      return r;
    };
  }

  public async revoke(): Promise<void> {}
}

export default DebugExtension;
