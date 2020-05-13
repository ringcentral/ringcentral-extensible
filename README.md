# RingCentral Unified SDK for TypeScript

[![Build Status](https://travis-ci.com/ringcentral/ringcentral-unified-ts.svg?token=316MqomevzwR7zFzsQz2&branch=master)](https://travis-ci.com/ringcentral/ringcentral-unified-ts)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

This SDK supports:

- [RingCentral REST API](https://developers.ringcentral.com/api-reference)
- [RingCentral Events & Notifications](https://developers.ringcentral.com/api-reference/events-notifications).

For transport protocol, this SDK supports:

- HTTPS
- WebSocket

It provides unifed programming interface for HTTPS and WebSocket:

- For RingCentral REST API, you can access it via either HTTPS or WebSocket.
- For RingCentral Events & Notifications, you can set it up with either WebHook or WebSocket.


## Installation

```
yarn add ringcentral-unified
```

or

```
npm install ringcentral-unified --save
```

Then you should be able to import the SDK like this:

```ts
import RestCentral from 'ringcentral-unified';
```

or

```js
const RestCentral = require('ringcentral-unified').default;
```


## Usage

#### [Sample code for all endpoints](./samples.md)

You can also find lots of useful code snippets from [test cases](./test).


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

Then you can set the default transport protocol to `wss`:

```ts
rc.defaults.transport = 'wss';
```

Transport protocol can also be specified when making an API call:

```ts
const extInfo = await rc
      .restapi()
      .account()
      .extension()
      .get({transport: 'wss'});
```

To use HTTPS as transport protocol, just specify `transport` as `'https'`.
Or do do not specify it at all when `https` is default.


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
If there is no CDN uri provided, contruct the uri as [sample code](./samples.md) shows.


## For maintainers

### Regenerate code using latest swagger spec

Get latest swagger spec [here](https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/rc-platform-adjusted.yml).

Make a copy of the `.env.sample` file and name it `.env`, edit it to specify credentials.

```
yarn generate
```


### Test

```
yarn test
```


### Todo

- make it work with offcial sdk
    - share token and auto update token based on token events
    - update ringcentral-client, or release @ringcentral/client
- Run tests in browser env
- no more `{}` type
- convert code generator to TS
- compare it with C# sdk and see what are missing
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
    - WSG should have its own folder and readme file
    - Support unsubscribe
    - according to wiki, subscription needs refreshing
    - what if network outage?
