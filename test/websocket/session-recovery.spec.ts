/* eslint-disable node/no-unpublished-import */
/* eslint-env jest */
import path from 'path';
import dotenv from 'dotenv-override-true';
import waitFor from 'wait-for-async';

import RingCentral from '../../src/index';
import WebSocketExtension from '../../src/extensions/webSocket';

jest.setTimeout(256000);
dotenv.config({path: path.join(__dirname, '..', '..', '.env.lab')});

describe('WSG session recovery', () => {
  test('default ', async () => {
    if (!process.env.IS_LAB_ENV) {
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
    rc.installExtension(webSocketExtension);
    await webSocketExtension.waitForReady();
    expect(
      webSocketExtension.connectionDetail?.body.recoveryState
    ).toBeUndefined();

    let eventCount = 0;
    await webSocketExtension.subscribe(
      ['/restapi/v1.0/account/~/extension/~/message-store/instant?type=SMS'],
      event => {
        expect(event).toBeDefined();
        eventCount += 1;
      }
    );

    // close WebSocket connection to simulate session lost
    // here we don't invoke webSocketExtension.revoke() because that will also revoke all subscriptions created
    webSocketExtension.ws.close();
    await waitFor({interval: 60000});
    await webSocketExtension.connect(); // re-connect
    await webSocketExtension.waitForReady();
    expect(webSocketExtension.connectionDetail?.body.recoveryState).toBe(
      'Successful'
    );

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
    const successful = await waitFor({
      condition: () => eventCount > 0,
      interval: 1000,
      times: 30,
    });
    await rc.revoke();
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
  });
});
