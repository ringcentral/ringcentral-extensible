# PubNub Extension

PubNub Extension adds PubNub notifications feature.

It is deprecated. Please use [WebSocket Extension](../ws) instead.

## Install

```
yarn add @rc-ex/pubnub
```

## Usage

```ts
import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';

const rc = new RingCentral(...);
const pubNubExtension = new PubNubExtension();
await rc.installExtension(pubNubExtension);

const subscription = await pubNubExtension.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    message => {
       ...
    }
);
```

## Known issue

The last pubnub version I tested is 7.3.3. I confirmed that it worked.

However, after I upgrade to pubnub 7.4.x, it stopped working. I don't know why.

We are not going to spend time on it any more because pubnub support is deprecated.
