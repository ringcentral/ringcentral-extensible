// eslint-disable-next-line node/no-unpublished-import
import waitFor from 'wait-for-async';

import RingCentral from '../..';
import {RestRequestConfig, RestResponse, RestMethod} from '../../Rest';
import SdkExtension from '..';
import RestException from '../../RestException';

export type ShouldRetry = (
  restException: RestException,
  retriesAttempted: number
) => boolean;
export type RetryInterval = (
  restException: RestException,
  retriesAttempted: number
) => number;
export type RetryOptions = {
  shouldRetry?: ShouldRetry;
  retryInterval?: RetryInterval;
};

class RetryExtension extends SdkExtension {
  shouldRetry: ShouldRetry;
  retryInterval: RetryInterval;

  constructor(options?: RetryOptions) {
    super();
    this.shouldRetry =
      options?.shouldRetry ??
      ((restException, retriesAttempted) => {
        return (
          retriesAttempted < 3 &&
          [429, 503].includes(restException.response.status)
        );
      });
    this.retryInterval =
      options?.retryInterval ??
      ((restException, retriesAttempted) => {
        return 60 * 1000 * Math.pow(2, retriesAttempted); // exponential back off
      });
  }

  install(rc: RingCentral): void {
    const request = rc.request.bind(rc);
    const newRequest = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig,
      retriesAttempted = 0
    ): Promise<RestResponse<T>> => {
      if (!this.enabled) {
        return request<T>(method, endpoint, content, queryParams, config);
      }
      try {
        return request<T>(method, endpoint, content, queryParams, config);
      } catch (e) {
        if (e instanceof RestException) {
          if (this.shouldRetry(e, retriesAttempted)) {
            await waitFor({interval: this.retryInterval(e, retriesAttempted)});
            return newRequest<T>(
              method,
              endpoint,
              content,
              queryParams,
              config,
              retriesAttempted + 1
            );
          }
        }
        throw e;
      }
    };
    rc.request = newRequest;
  }
}

export default RetryExtension;
