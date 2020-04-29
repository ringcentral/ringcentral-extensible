# RingCentral TypeScript SDK

[![Build Status](https://travis-ci.org/tylerlong/ringcentral-typescript.svg?branch=master)](https://travis-ci.org/tylerlong/ringcentral-typescript)

This SDK is modelled after the [RingCentral.NET](https://github.com/ringcentral/ringcentral.net) SDK which is the most popular RingCentral SDK for static compiled languages.


## Installation

```
yarn add ringcentral-typescript
```

## Setup
Make a copy of `env_example` and rename it to `.env`, then fill in the data appropriately. 

In your project, require the sdk, then initialize and login

```js
const RestClient = require('ringcentral-typescript').default

const rc = new RestClient({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL,
    appName: "", //optional
    appVersion: "", //optional
    httpClient: "", //optional
    token: "", //optional
    handleRateLimit: false //optional
})
```


## Sample code

#### [Sample code for all the endpoints](./samples.md)

You can also find lots of useful code snippets from the [test cases](./test).

Since this library is model after the [RingCentral.NET](https://github.com/ringcentral/ringcentral.net) SDK, you can also reference the samples in C#. It should be straightforward to translate C# code into TypeScript or JavaScript since this two SDKs are very similar.


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

## Rate Limiting
The RingCentral Platform enforces rate limits to reduce network traffic and avoid DOS issues. 

[Here's](https://github.com/ringcentral/ringcentral-js/blob/master/sdk/src/platform/Platform.ts) a blog article discussing it in detail. 

This SDK has the option of handling rate limits automatically by passing `handleRateLimit: (boolean | number)` into the constructor. 

Options: 

- boolean
    - When set to true, this will pause requests for however many seconds are indicated in the `rate-limit-window` header (defaulting to 60 is there header is somehow missing)
- number
    - When set to a number, this overrides using the header, or the default, and instead pauses for x seconds (where x is your number in the constructor)

## For maintainers

### Regenerate code using latest swagger spec

Get the latest swagger spec [here](https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/rc-platform-adjusted.yml) and run:

```
yarn generate
```


### Compile

```
yarn tsc
```


### Test

```
yarn test
```


### Todo

- compare it with C# sdk and see what are missing
- Create a WSG version of this SDK
- Replace axios with @ringcentral/sdk ?
- Make it an RingCentral official project
- PubNub
    - if use @ringcentral/sdk, then no need to implement
- Support events
    - if use @ringcentral/sdk, then no need to implement
