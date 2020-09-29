# WebSocket Extension

WebSocket Extension adds support for WebSocket protocol.


## Install

```
yarn add @rc-ex/ws
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';

const rc = new RingCentral(...);
const webSocketExtension = new WebSocketExtension(webSocketOptions);
await rc.installExtension(webSocketExtension);
```

You can setup subscriptions:

```ts
await webSocketExtension.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    event => {
       ...
    }
);
```

You can also make Rest API calls over WebSocket if you specified `webSocketOptions.restOverWebSocket` as `true`:

```ts
const webSocketExtension = new WebSocketExtension({
  restOverWebSocket: true,
});
await rc.installExtension(webSocketExtension);

const extInfo = await rc.restapi().account().extension().get();
console.log(extInfo.id);
```


## WebSocketOptions

`WebSocketExtension` constructor requires `WebSocketOptions` as parameter:


```ts
type WebSocketOptions = {
  restOverWebSocket?: boolean;
  debugMode?: boolean;
  autoRecover?: boolean;
};
```


### restOverWebSocket

`restOverWebSocket` indicates whether to make Rest API call over WebSocket protocol.

Default value is false.

Please note that, not all Rest API calls can be done over WebSocket protocol. The following are not supported at the moment:

- Binary downloading
- `form-data/multipart` POST / PUT
- Authorization, such as get token and revoke token

If `restOverWebSocket` is true and an Rest API call cannot be done over WebSocket, it will be done over HTTPS instead.


### debugMode

`debugMode` indicates whether to enable debug mode.

Default value is false.

If enabled, WebSocket incoming message and outgoing message will be printed using `console.debug`.


### autoRecover

`autoRecover` indicates whether to auto recover when WebSocket connection is lost.

Default value is true.

If disabled, you need to manually invoke `await webSocketExtension.recover()` whenever WebSocket connection is lost.


## Access WebSocket object

```ts
webSocketExtension.ws
```

gives you the WebSocket object. But if the network is unstable and `autoRecover` is enabled, sometimes a new WebSocket connection will be created to replace the current one.
You can listen for `autoRecoverSuccess` event:

```ts
import {Events} from '@rc-ex/ws';

...

webSocketExtension.eventEmitter.on(Events.autoRecoverSuccess, ws => {
  console.log(`New WebSocket connection: ${ws}`);
});
```


## Session Recovery

### Auto recover

By default auto recover is enabled. You can subscribe to auto recover events:

```ts
webSocketExtension.eventEmitter.on(Events.autoRecoverSuccess, ws => {
  console.log(`auto recover success: ${ws}`);
});
webSocketExtension.eventEmitter.on(Events.autoRecoverFailed, ws => {
  console.log(`auto recover failed: ${ws}`);
});
webSocketExtension.eventEmitter.on(Events.autoRecoverError, error => {
  console.log(`auto recover error: ${error}`);
});
```

- Note #1: `autoRecoverError` means cannot connect to WebSocket server at all. There will be more tries. So `autoRecoverError` does NOT mean auto recover gives up trying.
    - This is most likely caused by local network issue, or in rare cases remote WebSocket server is down.
    - This means a local exception or error.
- Note #2: `autoRecoverFailed` means connection to WebSocket server has been restored, but existing subscriptions haven't. The SDK automatically created new subscriptions for you.
    - Notifications during WebSocket disconnection are all lost.
    - It could mean `recoveryTimeout` and client side gives up recovery but creates brand new connection instead.
    - It could mean a message from WebSocket server with `"recoveryState": "Failed"`
- Note #3: `autoRecoverSuccess` means connection to WebSocket server has been restored, and existing subscriptions have been restored too. And server side keeps your notification messages in a buffer and it will send you the messages soon.
    - There is a `recoveryBufferSize` setting on server side. If there are too many messages queued before session recover success, oldest messages will be discarded.


### Manual recover

In case of network outage and the WebSocket connection is lost, you can restore the session by:

```ts
await webSocketExtension.recover()
```

Command above will create a new WebSocket connection and make sure that subscriptions are recovered.
