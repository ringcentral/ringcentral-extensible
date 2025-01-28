import RetryExtension from "@rc-ex/retry";

export interface RateLimitOptions {
  maxRetries?: number;
  rateLimitWindow?: number;
}

class RateLimitExtension extends RetryExtension {
  public constructor(options?: RateLimitOptions) {
    super({
      shouldRetry: (restException, retriesAttempted) =>
        retriesAttempted < (options?.maxRetries ?? 3) &&
        restException.response.status === 429,
      retryInterval: (restException, retriesAttempted) => {
        const rateLimitWindow =
          restException.response.headers["x-rate-limit-window"];
        return (
          (rateLimitWindow
            ? parseInt(rateLimitWindow, 10)
            : (options?.rateLimitWindow ?? 60)) *
          1000 *
          2 ** retriesAttempted // exponential back off
        );
      },
    });
  }
}

export default RateLimitExtension;
