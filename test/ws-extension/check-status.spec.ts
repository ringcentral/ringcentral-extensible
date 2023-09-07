import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';

import { createRingCentral } from '../utils';
// import waitFor from 'wait-for-async';

describe('WebSocket', () => {
  test('Rest API call via WebSocket', async () => {
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);

    // await waitFor({interval: 999999999});

    await rc.revoke();
  });
});
