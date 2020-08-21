import RingCentral from '@rc-ex/core';
import WebSocketExtension from '@rc-ex/ws';
import waitFor from 'wait-for-async';
import path from 'path';
import dotenv from 'dotenv-override-true';

dotenv.config({path: path.join(__dirname, '..', '.env.lab')});

describe('WebSocket', () => {
  test('subscription', async () => {
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
      // restOverWebSocket: true,
    });
    await rc.installExtension(webSocketExtension);

    let presenceEventCount = 0;
    await webSocketExtension.subscribe(
      ['/restapi/v1.0/account/~/extension/~/presence'],
      event => {
        expect(event).toBeDefined();
        presenceEventCount += 1;
      }
    );

    let smsEventCount = 0;
    await webSocketExtension.subscribe(
      ['/restapi/v1.0/account/~/extension/~/message-store/instant?type=SMS'],
      event => {
        expect(event).toBeDefined();
        smsEventCount += 1;
      }
    );

    await rc.restapi().account().extension().presence().put({
      userStatus: 'Busy',
      message: 'Hello world',
    });

    await rc
      .restapi()
      .account()
      .extension()
      .sms()
      .post({
        from: {phoneNumber: process.env.RINGCENTRAL_USERNAME!},
        to: [{phoneNumber: process.env.RINGCENTRAL_USERNAME!}], // send sms to oneself
        text: 'Hello world',
      });

    const successful1 = await waitFor({
      condition: () => presenceEventCount > 0,
      interval: 1000,
      times: 60,
    });
    expect(successful1).toBeTruthy();
    const successful2 = await waitFor({
      condition: () => smsEventCount > 0,
      interval: 1000,
      times: 60,
    });
    expect(successful2).toBeTruthy();

    await rc.revoke();
  });
});
