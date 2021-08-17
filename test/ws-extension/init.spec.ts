import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';

describe('WebSocket', () => {
  test('subscription', async () => {
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
    const webSocketExtension = new WebSocketExtension({});
    await rc.installExtension(webSocketExtension);

    expect(webSocketExtension.ws).not.toBeUndefined();

    await rc.revoke();
  });
});
