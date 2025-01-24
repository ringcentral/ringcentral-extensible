import type RingCentral from "@rc-ex/core";
import type {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from "@rc-ex/core/lib/types";
import SdkExtension from "@rc-ex/core/lib/SdkExtension";
import RestException from "@rc-ex/core/lib/RestException";
import waitFor from "wait-for-async";

export type ShouldRetry = (
  restException: RestException,
  retriesAttempted: number,
) => boolean;
export type RetryInterval = (
  restException: RestException,
  retriesAttempted: number,
) => number;
export interface RetryOptions {
  shouldRetry?: ShouldRetry;
  retryInterval?: RetryInterval;
}

class RetryExtension extends SdkExtension {
  public options: RetryOptions;

  public constructor(options: RetryOptions = {}) {
    super();
    this.options = options;
    this.options.shouldRetry ??= (restException, retriesAttempted) =>
      retriesAttempted < 3 &&
      [429, 503].includes(restException.response.status);
    this.options.retryInterval ??= (restException, retriesAttempted) =>
      60 * 1000 * 2 ** retriesAttempted; // exponential back off
  }

  public async install(rc: RingCentral) {
    const request = rc.request.bind(rc);
    const newRequest = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig,
      retriesAttempted = 0,
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request(method, endpoint, content, queryParams, config);
      }
      try {
        return await request(method, endpoint, content, queryParams, config);
      } catch (e) {
        if (e instanceof RestException) {
          if (this.options.shouldRetry!(e, retriesAttempted)) {
            await waitFor({
              interval: this.options.retryInterval!(e, retriesAttempted),
            });
            return await newRequest<T>(
              method,
              endpoint,
              content,
              queryParams,
              config,
              retriesAttempted + 1,
            );
          }
        }
        throw e;
      }
    };
    rc.request = newRequest;
  }

  public async revoke(): Promise<void> {}
}

export default RetryExtension;
