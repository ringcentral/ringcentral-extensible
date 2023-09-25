# RingCentral SDK extension

This extension makes [@ringcentral/sdk](https://www.npmjs.com/package/@ringcentral/sdk) the HTTP engine.

## Install

```
yarn add @rc-ex/rcsdk
```

## Usage

```ts
import SDK from '@ringcentral/sdk';
import RingCentral from '@rc-ex/core';
import RcSdkExtension from '@rc-ex/rcsdk';

// @ringcentral/sdk
const sdk = new SDK({ clientId, clientSecret, server });
await sdk.login({ username, extension, password });

// ringcentral-extensible + rcsdk extension
const rc = new RingCentral();
const rcSdkExtension = new RcSdkExtension({ rcSdk: sdk });
await rc.installExtension(rcSdkExtension);

// API call with @ringcentral/sdk as HTTP engine
const extensionInfo = await rc.restapi().account().extension().get();
```

For a working sample, please check this [test case](../../../test/rcsdk-extension.spec.ts).

## Known issues

`multipart/form-data` does not work, because `@rc-ex/core` is originally designed for [axios](https://github.com/axios/axios).
For such cases, please use `@ringcentral/sdk` directly, such as `await sdk.post('/restapi/v1.0/account/~/extension/~/fax', ...);`

Some extensions don't work with this extension. For example, the Retry Extension and RateLimit Extension because they rely on RestException object which `@ringcentral/sdk` doesn't throw.

## Switch between @ringcentral/sdk and axios

[axios][https://github.com/axios/axios] is the default HTTP engine.
This extension makes `@ringcentral/sdk` as HTTP engine. to switch back to `axios`, just disable this extension:

```ts
// ringcentral-extensible + rcsdk extension
const rc = new RingCentral({...});
const rcSdkExtension = new RcSdkExtension({rcSdk: sdk});
await rc.installExtension(rcSdkExtension);

// API call with @ringcentral/sdk as HTTP engine
const extensionInfo = await rc.restapi().account().extension().get();

rcSdkExtension.disable();
// API call with axios as HTTP engine
const extensionInfo2 = await rc.restapi().account().extension().get();
```

Please note that by default `@ringcentral/sdk` and `axios` doesn't share tokens. You may need to manage tokens separately.
Or you can make them share tokens explicitly by getting token from one and setting to the other.
