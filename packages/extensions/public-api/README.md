# Public API Extension

Provide public API for this SDK.

This extension is installed **by default**.


## Install

```
yarn add @rc-ex/public-api
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import PublicApiExtension from '@rc-ex/public-api';

const rc = new RingCentral(...);
const publicApiExtension = new PublicApiExtension();
await rc.installExtension(publicApiExtension);
```

With this extension installed, you will be able to invoke public APIs using chaining methods:

```ts
const extInfo = await rc.restapi().account().extension().get();
```
