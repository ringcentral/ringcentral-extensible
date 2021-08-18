# RingCentral Extensible SDK

[![Build Status](https://github.com/ringcentral/ringcentral-extensible/workflows/Node.js/badge.svg?branch=master)](https://github.com/ringcentral/ringcentral-extensible/actions)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

RingCentral Extensible is a SDK with a tiny core and lots of extensions.
It is an endeavour to get rid of bloated SDK. You install extensions on demand.


## Getting help and support

If you are having difficulty using this SDK, or working with the RingCentral API, please visit our [developer community forums](https://community.ringcentral.com/spaces/144/) for help and to get quick answers to your questions. If you wish to contact the RingCentral Developer Support team directly, please [submit a help ticket](https://developers.ringcentral.com/support/create-case) from our developer website.


## Installation

```
yarn add @rc-ex/core
```

Then you should be able to import the SDK like this:

```ts
import RingCentral from '@rc-ex/core';
```


## Usage

#### [Sample code for all endpoints](./packages/core/samples.md)

You can also find lots of useful code snippets from [test cases](./test).


## [Extensions](./packages/extensions)

This SDK supports [extensions](./packages/extensions). You can enable features by installing extensions.

If you want to add features to this SDK, create an extension.


## Binary content downloading

Some [sample code](./packages/core/samples.md) for binary content downloading may not work.

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
If there is no CDN uri provided, construct the uri as [sample code](./packages/core/samples.md) shows.


## For maintainers

### Regenerate code using latest swagger spec

Make a copy of the `packages/core/.env.sample` file and name it `packages/core/.env`, edit it to specify path to swagger spec file.

```
yarn generate
```


### Test

```
yarn reset && yarn compile && yarn test
```


## Publish

```
yarn lerna publish
```


## Add dependency

```
yarn lerna add ramda --scope=@rc-ex/debug
```


### Todo

- Extension to refresh token
- Extension to do pagination
- Change `enabled` to `enable()` and `disable()`
