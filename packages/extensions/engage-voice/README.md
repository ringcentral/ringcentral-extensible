# Engage Voice Extension

Engage Voice Extension adds support for RingCentral Engage Voice API.


## Install

```
yarn add @rc-ex/engage-voice
```


## Usage

```ts
import RingCentral from '@rc-ex/core';
import EngageVoiceExtension from '@rc-ex/engage-voice';

const rc = new RingCentral(...);
const engageVoiceExtension = new EngageVoiceExtension();
await rc.installExtension(engageVoiceExtension);

await rc.authorize(...);
await engageVoiceExtension.authorize();

const r = await engageVoiceExtension.get('/voice/api/v1/admin/accounts');
console.log(r.data);
```


## To generate code

Rename `.env.sample` to `.env` and specify the EV spec file.

```
yarn lerna run generate --scope=@rc-ex/engage-voice
```
