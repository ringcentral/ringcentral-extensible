# Rate Limit Extension

Rate limit extension handles rate limit automatically by delaying and retrying API calls.


## Usage

```ts
import RingCentral from 'ringcentral-unified';
const rc = new RingCentral(...);

const rateLimitExtension = new RateLimitExtension();
rc.installExtension(rateLimitExtension);
```
