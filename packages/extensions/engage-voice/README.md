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
```
