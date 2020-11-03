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
```
