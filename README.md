# RingCentral Extensible SDK

[![Build Status](https://github.com/ringcentral/ringcentral-extensible/actions/workflows/node.js.yml/badge.svg)](https://github.com/ringcentral/ringcentral-extensible/actions)

RingCentral Extensible is a SDK with a tiny core and lots of extensions. It is
an endeavour to get rid of bloated SDK. You install extensions on demand.

## Getting help and support

If you are having difficulty using this SDK, or working with the RingCentral
API, please visit our
[developer community forums](https://community.ringcentral.com/spaces/144/) for
help and to get quick answers to your questions. If you wish to contact the
RingCentral Developer Support team directly, please
[submit a help ticket](https://developers.ringcentral.com/support/create-case)
from our developer website.

## Installation

```
yarn add @rc-ex/core
```

Then you should be able to import the SDK like this:

```ts
import RingCentral from "@rc-ex/core";
```

## Usage

#### [Sample code for all endpoints](./packages/core/src/samples.md)

You can also find lots of useful code snippets from [test cases](./test).

## [Extensions](./packages/extensions)

This SDK supports [extensions](./packages/extensions). You can enable features
by installing extensions.

If you want to add features to this SDK, create an extension.

## Logging

The logging implementation copies
[AWS SDK logging](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/logging-sdk-calls.html).

To enable logging:

```ts
RingCentral.config.logger = console;
```

Or you could use a third-party logger:

```ts
import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});
RingCentral.config.logger = logger;
```

Sample log entries:

```
[3/16/2022, 9:58:47 AM HTTP GET 200 OK] https://platform.devtest.ringcentral.com /restapi/v1.0/account/~/extension/~/call-log
[3/16/2022, 5:47:53 PM HTTP POST 401 Unauthorized] https://platform.ringcentral.com /restapi/oauth/token
```

[A demo application printing logs to console](https://github.com/tylerlong/rc-logging-demo-ts).

## Binary content downloading

Some [sample code](./packages/core/src/samples.md) for binary content
downloading may not work.

Because RingCentral is gradually migrating binary content to CDN such as
`media.ringcentral.com`.

For example, to download the attachment of a fax:

```ts
// `message` is the fax message object
const r = await rc.get(message.attachments[0].uri, undefined, {
  responseType: "arraybuffer",
});
const content = r.data;
```

The following does **NOT** work:

```ts
// `message` is the fax message object
const content = await rc
  .restapi()
  .account()
  .extension()
  .messageStore(message.id)
  .content(message.attachments[0].id)
  .get();
```

### Rule of thumb

But not all binary content has been migrated to CDN. If the resource to download
provides you with a CDN uri, use that CDN uri. If there is no CDN uri provided,
construct the uri as [sample code](./packages/core/src/samples.md) shows.

## For maintainers

### Regenerate code using latest swagger spec

Please refer to the
[RingCentral Code Generator](https://github.com/tylerlong/ringcentral-code-generator-typescript)
project.

### Test

```
yarn reset && yarn compile && yarn test
```

### Test one test case

```
t=auto-recover yarn test
```

## Publish

Update version number in `packages/core/src/Rest.ts`

```
yarn lerna publish from-package
```

By default lerna check git tag to determine which packages to publish.
`from-package` will make lerna check npmjs.com instead.

As I just tried, it works without `from-package` option.

### NPM 2FA

I don't know how to make it work with lerna and I have to disable it via
npmjs.com GUI: I disabled "Require two-factor authentication for write actions".

## Add dependency

```
yarn workspace @rc-ex/debug add ramda
```

### Todo

- Extension to refresh token
- Extension to do pagination
