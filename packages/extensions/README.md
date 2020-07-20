# Extensions

This folder contains features which are not considered to be the core of the SDK.

We provide them as extensions so you can install them on demand.


## Usage

Here we provide general usage guidance for extensions. You need to read each extension's README page in case there are special instructions.

Let's say an extension's name is `AbcExtension`:

```ts
import RingCentral from '@rc-ex/core';
import AbcExtension from '@rc-ex/abc';

const rc = new RingCentral(...);
const abcExtension = new AbcExtension(...);
await rc.installExtension(abcExtension);
```

## Enable & Disable

By default, an extension is enabled after installation. You can disable it by `abcExtension.enabled = false`.

You can re-enabled it by `abcExtension.enabled = true`.


## [Debug Mode Extension](./debug)

Debug mode extension prints details about API traffic so you can inspect the request and response data.


## [Retry Extension](./retry)

Retry Extension auto retries API calls based on specified condition and interval.


## [Rate Limit Extension](./rate-limit)

Rate limit extension handles rate limit automatically by delaying and retrying API calls.


## [Event Emitter Extension](./events)

Event Emitter Extension emits API call related events.


## [RingCentral Extension](./rcsdk)

RingCentral Extension makes [@ringcentral/sdk](https://www.npmjs.com/package/@ringcentral/sdk) the HTTP engine.


## [WebSocket Extension](./ws)

WebSocket Extension adds support for WebSocket protocol.


## [PubNub Extension](./pubnub)

PubNub Extension adds PubNub notifications feature.
