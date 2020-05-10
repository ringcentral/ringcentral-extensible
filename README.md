# RingCentral Unified SDK for TypeScript

[![Build Status](https://travis-ci.org/ringcentral/ringcentral-unified-ts.svg?branch=master)](https://travis-ci.org/ringcentral/ringcentral-unified-ts)

This SDK supports both [RingCentral REST API](https://developers.ringcentral.com/api-reference) and [RingCentral Events & Notifications](https://developers.ringcentral.com/api-reference/events-notifications).

It provides unifed programming interface to transport protocol HTTPS and WebSocket:

- For RingCentral REST API, you can access it via either HTTPS or WebSocket.
- For RingCentral Events & Notifications, you can set it up with either WebSocket or WebHook.


## Installation

```
yarn add ringcentral-typescript
```

or

```
npm install ringcentral-typescript --save
```

Then you should be able to import the SDK like this:

```ts
import RestCentral from 'ringcentral-typescript';
```

or

```js
const RestCentral = require('ringcentral-typescript').default;
```


## Usage

#### [Sample code for all the endpoints](./samples.md)

You can also find lots of useful code snippets from the [test cases](./test).


## Change Transport Protocol

By default, HTTPS is the transport protocol. If you'd like to use WebSocket as transport protocol, you need to sepcify `wsgOptions` when creating a `RingCentral` instance:

```ts
const restOptions = { ... };
const wsgOptions = {
    server: 'wss://ws-api.devtest.ringcentral.com/ws', // for sandbox
    // server: 'wss://ws-api.ringcentral.com/ws', // for production
};
const rc = new RingCentral(restOptions, wsgOptions);
```

The you can set the default tranport protocol to `wss`:

```ts
rc.defaults.tranport = 'wss';
```

The transport protocol can also be specified when making an API call:

```ts
const extInfo = await rc
      .restapi()
      .account()
      .extension()
      .get({transport: 'wss'});
```

To use HTTPS as transport protocol, just specify `tranport` as `'https'`.


## Binary content downloading

Some [sample code](./samples.md) for binary content downloading may not work.

Because RingCentral is gradually migrating binary content to CDN such as `media.ringcentral.com`.

For example, to download the attachment of a fax:

```ts
// `message` is the fax message object
const r = await rc.get(message.attachments[0].uri, undefined, { responseType: 'arraybuffer' })
const content = r.data
```

The following does **NOT** work:

```ts
// `message` is the fax message object
const content = await rc.restapi().account().extension().messageStore(message.id).content(message.attachments[0].id).get()
```

### Rule of thumb

But not all binary content has been migrated to CDN.
If the resource to download provides you with a CDN uri, use that CDN uri.
If there is no CDN uri provided, contruct the uri as the [sample code](./samples.md) shows.


## For maintainers

### Regenerate code using latest swagger spec

Get the latest swagger spec [here](https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/rc-platform-adjusted.yml) and run:

```
yarn generate
```


### Test

```
yarn test
```


### Todo

- no more `{}` type
- convert code generator to TS
- compare it with C# sdk and see what are missing
- Make it a RingCentral official project
- PubNub
    - optional, since we will mainly use WSG instead.
- Support events:
    - token refreshed
- extra features as plugins or extensions
    - rate limit handling
    - debug mode
    - extrensions/<extension 1>/
        - every extension should have a readme file
- WSG
    - Test WSG queryParams with array as value
    - Test WSG binary uploading / downloading
    - update test case so that everyone tests both REST and WSG
    - WSG should have its own folder and readme file
