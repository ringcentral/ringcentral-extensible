import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';
// import waitFor from 'wait-for-async';

describe('WebSocket', () => {
  test('Rest API call via WebSocket', async () => {
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
      debugMode: true,
    });
    await rc.installExtension(webSocketExtension);

    // await waitFor({interval: 999999999});

    await rc.revoke();
  });
});
