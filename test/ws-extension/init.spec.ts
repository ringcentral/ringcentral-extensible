import WebSocketExtension from '@rc-ex/ws';
import ReusableRestClient from '../reusable-rest-client';

describe('WebSocket', () => {
  test('subscription', async () => {
    const rc = await ReusableRestClient.getInstance();
    const webSocketExtension = new WebSocketExtension({});
    await rc.installExtension(webSocketExtension);
    expect(webSocketExtension.ws).not.toBeUndefined();
    await webSocketExtension.revoke();
  });
});
