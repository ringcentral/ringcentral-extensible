# RingCentral Unified SDK for TypeScript

[![Build Status](https://travis-ci.com/ringcentral/ringcentral-unified-ts.svg?token=316MqomevzwR7zFzsQz2&branch=master)](https://travis-ci.com/ringcentral/ringcentral-unified-ts)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)


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


## Extensions

This SDK supports [extensions](./src/extensions). You can enable features by installing extensions.

If you want to add features to this SDK, create an extension.


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
If there is no CDN uri provided, construct the uri as [sample code](./samples.md) shows.


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

- rename project to `ringcentral-extensible` or `ringcentral-types`
- convert code generator to TS
- compare it with C# sdk and see what are missing
- PubNub
    - test it
- WSG
    - Support unsubscribe
    - according to wiki, subscription needs refreshing
    - what if network outage?
