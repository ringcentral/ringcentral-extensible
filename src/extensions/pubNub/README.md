## PubNub Extension

PubNub Extension adds PubNub notifications feature.


## Install dependencies

```
yarn add pubnub
```


## Usage

```ts
import RingCentral from 'ringcentral-unified';
import PubNubExtension from 'ringcentral-unified/build/extensions/pubNub';

const rc = new RingCentral(...);
const pubNubExtension = new PubNubExtension();
rc.installExtension(pubNubExtension);
```

You can setup subscriptions:

```ts
await pubNubExtension.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    event => {
       ...
    }
);
```
