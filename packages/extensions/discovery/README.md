# Discovery Extension

Entry Point Discovery.


## Install

```
yarn add @rc-ex/discovery
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import DiscoveryExtension from '@rc-ex/discovery';

const rc = new RingCentral(...);
const discoveryExtension = new DiscoveryExtension();
await rc.installExtension(discoveryExtension);
await discoveryExtension.discover();

console.log(discoveryExtension.initialEntryPoints)

// Then you don't have to manually configure the platform API server
const extInfo = await rc.restapi().account().extension().get();
```

### With @ringcentral/sdk

```ts
const rc = new RingCentral();

// install Discovery Extension
const discoveryExtension = new DiscoveryExtension({
    discoveryServer: process.env.RINGCENTRAL_DISCOVERY_SERVER!,
    brandId: '1210',
});
rc.installExtension(discoveryExtension);
await discoveryExtension.discover(); // discover entry points

// install RingCentral Extension
const sdk = new SDK({
    clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    server: discoveryExtension.initialEntryPoints!.coreApi.baseUri, // use the discovered entry point
});
await sdk.login({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension: process.env.RINGCENTRAL_EXTENSION!,
    password: process.env.RINGCENTRAL_PASSWORD!,
});
const ringCentralExtension = new RingCentralExtension(sdk);
await rc.installExtension(ringCentralExtension);

const extInfo = await rc.restapi().account().extension().get();
```
