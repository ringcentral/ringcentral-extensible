# Auto Refrsh Extension

This extension will auto refresh your token every 30 minutes(customizable).

## Install

```
yarn add @rc-ex/auto-refresh
```

## Usage

```ts
import RingCentral from '@rc-ex/core';
import AutoRefreshExtension from '@rc-ex/auto-refresh';

const rc = new RingCentral(...);
const autoRefreshExtension = new AutoRefreshExtension();
await rc.installExtension(autoRefreshExtension);
autoRefreshExtension.start();
// autoRefreshExtension.stop();
```

For a working sample, please check this [test case](../../../test/auto-refresh-extension.spec.ts).

## Disclaimer

[Token management](https://medium.com/ringcentral-developers/ringcentral-token-management-477578f00954) is a complicated topic. There is no one-fit-all solution. This extension is an quick-and-dirty out-of-box solution to refresh your token. It is by no means the best practice. It simply starts a background timers to refresh your token periodically. For serious production applications, you may need better token management strategy.
