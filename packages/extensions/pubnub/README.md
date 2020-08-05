# PubNub Extension

PubNub Extension adds PubNub notifications feature.


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

const subscription = pubNubExtension.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    message => {
       ...
    }
);
```

## Todo

Should not depend on `@babel/runtime`. It is a bug of PubNub 4.29.0. Remove it when there is a PubNub new version.
