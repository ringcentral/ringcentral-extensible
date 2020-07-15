# Retry Extension

Retry API calls upon `RestException`


## Install dependencies

```
yarn add wait-for-async
```


## Usage

```ts
import RingCentral from '@ringcentral-extensible/core';
import RetryExtension from '@ringcentral-extensible/retry';

const rc = new RingCentral(...);
const retryExtension = new RetryExtension(retryOptions);
await rc.installExtension(retryExtension);
```


## Options

### RetryOptions

`RetryExtension` constructor accepts optional `RetryOptions` as parameter:

```ts
type RetryOptions = {
  shouldRetry?: ShouldRetry;
  retryInterval?: RetryInterval;
};
```

### ShouldRetry

`ShouldRetry` defines condition about should retry or abort:

```ts
type ShouldRetry = (
  restException: RestException,
  retriesAttempted: number
) => boolean;
```

By default, `ShouldRetry` returns true when `restException.response.status` is 429 or 503 and `retriesAttempted` is smaller than 3:

```ts
((restException, retriesAttempted) => {
  return (
    retriesAttempted < 3 &&
    [429, 503].includes(restException.response.status)
  );
})
```

### RetryInterval

`RetryInterval` defines how long should wait before try:

```ts
type RetryInterval = (
  restException: RestException,
  retriesAttempted: number
) => number;
```

By default `RetryInterval` is 60 seconds with exponential back off:

```ts
((restException, retriesAttempted) => {
  return 60 * 1000 * Math.pow(2, retriesAttempted); // exponential back off
});
```
