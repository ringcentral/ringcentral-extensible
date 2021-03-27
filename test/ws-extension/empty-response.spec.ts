import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';

describe('WebSocket', () => {
  test('empty response', async () => {
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const webSocketExtension = new WebSocketExtension({
      restOverWebSocket: true,
      // debugMode: true, // todo: test uncomment this
    });
    await rc.installExtension(webSocketExtension);
    // await rc.scim().health().get(); // todo: uncomment this
    await rc.revoke();
  });
});
