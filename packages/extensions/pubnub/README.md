# PubNub Extension

PubNub Extension adds PubNub notifications feature.


## Install dependencies

```
yarn add pubnub
```

If you use TypeScript, you also need the following:

```
yarn add @types/pubnub
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';

const rc = new RingCentral(...);
const pubNubExtension = new PubNubExtension();
await rc.installExtension(pubNubExtension);

const subscription = pubNubExtension.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    message => {
       ...
    }
);
```
