import WebSocketExtension from '@rc-ex/ws';

import ReusableRestClient from '../reusable-rest-client';
// import waitFor from 'wait-for-async';

describe('WebSocket', () => {
  test('Override pingServer', async () => {
    const rc = await ReusableRestClient.getInstance();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);
    webSocketExtension.pingServer = async () => {
      await webSocketExtension.request('get', '/restapi/v1.0/status');
    };
    // await waitFor({interval: 90000});
    await webSocketExtension.revoke();
  });
});
