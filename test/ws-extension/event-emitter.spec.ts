import RingCentral from '@rc-ex/core';
import WebSocketExtension, {Events} from '@rc-ex/ws';
// import path from 'path';
// import dotenv from 'dotenv-override-true';
import waitFor from 'wait-for-async';

// dotenv.config({path: path.join(__dirname, '..', '.env.lab')});

describe('WebSocket', () => {
  test('event emitter', async () => {
    // if (process.env.IS_LAB_ENV !== 'true') {
    //   return;
    // }
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
      autoRecover: {
        enabled: true,
      },
      // debugMode: true,
    });

    await rc.installExtension(webSocketExtension);

    const oldWS = webSocketExtension.ws;

    let count = 0;
    webSocketExtension.eventEmitter.on(Events.autoRecoverSuccess, ws => {
      expect(ws).toBeDefined();
      expect(ws).not.toBe(oldWS);
      count += 1;
    });

    // close it to trigger auto recover
    webSocketExtension.ws.close();

    const result = await waitFor({
      interval: 1000,
      times: 30,
      condition: () => count >= 1,
    });

    const newWS = webSocketExtension.ws;
    expect(newWS).not.toBe(oldWS);

    expect(result).toBeTruthy();
    await rc.revoke();
  });
});
