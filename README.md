# RingCentral Extensible SDK

[![Build Status](https://travis-ci.com/ringcentral/ringcentral-extensible.svg?token=316MqomevzwR7zFzsQz2&branch=master)](https://travis-ci.com/ringcentral/ringcentral-extensible)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

RingCentral Extensible is a SDK with a tiny core and lots of extensions.
It is an endeavour to get rid of bloated SDK. You install extensions on demand.


## Installation

```
yarn add ringcentral-extensible
```

Then you should be able to import the SDK like this:

```ts
import RestCentral from 'ringcentral-extensible';
```


## Usage

#### [Sample code for all endpoints](./samples.md)

You can also find lots of useful code snippets from [test cases](./test).


## [Extensions](./src/extensions)

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

Get latest swagger spec [here](https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/rc-platform.yml).

Make a copy of the `.env.sample` file and name it `.env`, edit it to specify credentials.

```
yarn generate
```


### Test

```
yarn test
```


### Todo

- refactor code generator
    - it was converted from js, lots of explicit any
    - update `code-generator/.eslintrc.json`
- compare it with C# sdk and see what are missing
- WSG
    - what if network outage?
- Update doc about monorepo
