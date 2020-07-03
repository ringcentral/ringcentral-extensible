# Event Emitter Extension

This extension emits API call related events.


## Usage

```ts
import RingCentral from 'ringcentral-extensible';
import EventEmitterExtension, {Events} from 'ringcentral-extensible/build/src/extensions/eventEmitter';

const rc = new RingCentral(...);
const eventEmitterExtension = new EventEmitterExtension(eventEmitterOptions);
await rc.installExtension(eventEmitterExtension);

eventEmitterExtension.eventEmitter.on(Events.requestSuccess, r => {
  console.log(`There is a request error: ${r}`)
})
```

For a working sample, please check this [test case](../../../test/event_emitter_extension.spec.ts).


## EventEmitterOptions

`EventEmitterExtension` constructor accepts optional `EventEmitterOptions` as parameter:

```ts
type EventEmitterOptions = {
  enabledEvents?: Events[];
};
```

### enabledEvents

`enabledEvents` specifies which events are enabled:

```ts
enum Events {
  beforeRequest = 'beforeRequest',
  requestSuccess = 'requestSuccess',
  requestError = 'requestError',

  // enum values below are from
  // https://github.com/ringcentral/ringcentral-js/blob/master/sdk/src/platform/Platform.ts
  beforeLogin = 'beforeLogin',
  loginSuccess = 'loginSuccess',
  loginError = 'loginError',
  beforeRefresh = 'beforeRefresh',
  refreshSuccess = 'refreshSuccess',
  refreshError = 'refreshError',
  beforeLogout = 'beforeLogout',
  logoutSuccess = 'logoutSuccess',
  logoutError = 'logoutError',
  rateLimitError = 'rateLimitError',
}
```

If you don't specify this parameter, all events are enabled by default.
