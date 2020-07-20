# Rate Limit Extension

Rate limit extension handles rate limit automatically by delaying and retrying API calls.

This extension is based on the [Retry Extension](../retry).


## Install

```
yarn add @rc-ex/rate-limit
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import RateLimitExtension from '@rc-ex/rate-limit';

const rc = new RingCentral(...);
const rateLimitExtension = new RateLimitExtension(rateLimitOptions);
await rc.installExtension(rateLimitExtension);
```


## RateLimitOptions

`RetryExtension` constructor accepts optional `RateLimitOptions` as parameter:

```ts
type RateLimitOptions = {
  maxRetries?: number;
  rateLimitWindow?: number;
};
```

### maxRetries

`maxRetries` defines maximum times of retries before aborting.

Default value is 3.


### rateLimitWindow

`rateLimitWindow` defines the rate limit window. This parameter will only take effect when there is no `x-rate-limit-window` HTTP header available.

Default value is 60 (seconds).

Its value is used to determine the [retryInterval](https://github.com/ringcentral/ringcentral-extensible/tree/master/packages/extensions/retry#retryinterval).
