# Events Extension

This extension emits API call related events.

## Install

```
yarn add @rc-ex/events
```

## Usage

```ts
import RingCentral from '@rc-ex/core';
import EventsExtension, {Events} from '@rc-ex/events';

const rc = new RingCentral(...);
const eventsExtension = new EventsExtension(eventsOptions);
await rc.installExtension(eventsExtension);

eventsExtension.eventEmitter.on(Events.requestSuccess, r => {
  console.log(`There is a request error: ${r}`)
})
```

For a working sample, please check this
[test case](../../../test/events-extension.spec.ts).

## EventsOptions

`EventsExtension` constructor accepts optional `EventsOptions` as parameter:

```ts
type EventsOptions = {
  enabledEvents?: Events[];
};
```

### enabledEvents

`enabledEvents` specifies which events are enabled:

```ts
enum Events {
  beforeRequest = "beforeRequest",
  requestSuccess = "requestSuccess",
  requestError = "requestError",

  // enum values below are from
  // https://github.com/ringcentral/ringcentral-js/blob/master/sdk/src/platform/Platform.ts
  beforeLogin = "beforeLogin",
  loginSuccess = "loginSuccess",
  loginError = "loginError",
  beforeRefresh = "beforeRefresh",
  refreshSuccess = "refreshSuccess",
  refreshError = "refreshError",
  beforeLogout = "beforeLogout",
  logoutSuccess = "logoutSuccess",
  logoutError = "logoutError",
  rateLimitError = "rateLimitError",
}
```

If you don't specify this parameter, all events are enabled by default.
