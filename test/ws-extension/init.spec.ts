import WebSocketExtension from '@rc-ex/ws';
import { createRingCentral } from '../utils';

describe('WebSocket', () => {
  test('subscription', async () => {
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({});
    await rc.installExtension(webSocketExtension);

    expect(webSocketExtension.ws).not.toBeUndefined();

    await rc.revoke();
  });
});
