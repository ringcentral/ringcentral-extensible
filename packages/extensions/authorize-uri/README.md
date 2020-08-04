# Authorize URI Extension

Generate Authorize URI.


## Install

```
yarn add @rc-ex/authorize-uri
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import AuthorizeUriExtension from '@rc-ex/authorize-uri';

const rc = new RingCentral(...);
const authorizeUriExtension = new AuthorizeUriExtension();
await rc.installExtension(authorizeUriExtension);
```

For a working sample, please check this [test case](../../../test/authorize-uri-extension.spec.ts).
