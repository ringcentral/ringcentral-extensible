# RingCentral extension

This extension makes [@ringcentral/sdk](https://www.npmjs.com/package/@ringcentral/sdk) the HTTP engine.


## Install dependencies

```
yarn add @ringcentral/sdk
```


## Usage

```ts
import SDK from '@ringcentral/sdk';
import RingCentral from 'ringcentral-unified';
import RingCentralExtension from 'ringcentral-unified/build/extensions/ringCentral';

// @ringcentral/sdk
const sdk = new SDK({clientId, clientSecret, server});
await sdk.login({username, extension, password});

// ringcentral-unified + ringcentral extension
const rc = new RingCentral();
const ringCentralExtension = new RingCentralExtension(sdk);
rc.installExtension(ringCentralExtension);

// API call with @ringcentral/sdk as HTTP engine
const extensionInfo = await rc.restapi().account().extension().get();
```

For a working sample, please check this [test case](../../../test/ringcentral_extension.spec.ts).


## Known issues

`multipart/form-data` may not work, since this library is originally designed for [axios](https://github.com/axios/axios). For such cases, please use `@ringcentral/sdk` directly, such as `await sdk.post('/restapi/v1.0/account/~/extension/~/fax', ...);`
