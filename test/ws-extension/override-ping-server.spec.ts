import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';

import { createRingCentral } from '../utils';
// import waitFor from 'wait-for-async';

describe('WebSocket', () => {
  test('Override pingServer', async () => {
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);
    webSocketExtension.pingServer = async () => {
      await webSocketExtension.request('get', '/restapi/v1.0/status');
    };
    // await waitFor({interval: 90000});
    await rc.revoke();
  });
});
