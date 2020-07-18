import RetryExtension from '@rc-ex/retry';

export type RateLimitOptions = {
  maxRetries?: number;
  rateLimitWindow?: number;
};

class RateLimitExtension extends RetryExtension {
  constructor(options?: RateLimitOptions) {
    super({
      shouldRetry: (restException, retriesAttempted) => {
        return (
          retriesAttempted < (options?.maxRetries ?? 3) &&
          restException.response.status === 429
        );
      },
      retryInterval: (restException, retriesAttempted) => {
        const rateLimitWindow =
          restException.response.headers['x-rate-limit-window'];
        return (
          (rateLimitWindow
            ? parseInt(rateLimitWindow)
            : options?.rateLimitWindow ?? 60) *
          1000 *
          Math.pow(2, retriesAttempted) // exponential back off
        );
      },
    });
  }
}

export default RateLimitExtension;
