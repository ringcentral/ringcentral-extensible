import WebSocketExtension from '@rc-ex/ws';
import { createRingCentral } from '../utils';

describe('WebSocket', () => {
  test('empty response', async () => {
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      restOverWebSocket: true,
      // debugMode: true, // todo: test uncomment this
    });
    await rc.installExtension(webSocketExtension);
    // await rc.scim().health().get(); // todo: uncomment this
    await rc.revoke();
  });
});
