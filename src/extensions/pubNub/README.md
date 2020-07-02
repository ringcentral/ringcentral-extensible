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
import RingCentral from 'ringcentral-extensible';
import PubNubExtension from 'ringcentral-extensible/build/extensions/pubNub';

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
