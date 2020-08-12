import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';
import path from 'path';
import dotenv from 'dotenv-override-true';
import waitFor from 'wait-for-async';

dotenv.config({path: path.join(__dirname, '..', '.env.lab')});

jest.setTimeout(999999999);

describe('WebSocket', () => {
  test('auto recover', async () => {
    if (process.env.IS_LAB_ENV !== 'true') {
      return;
    }
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
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);

    webSocketExtension.ws.close();

    await waitFor({interval: 15000});

    const extInfo = await rc.restapi().account().extension().get();
    expect(extInfo).toBeDefined();

    await rc.revoke();
  });
});
