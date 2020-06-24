/* eslint-env jest */
// eslint-disable-next-line node/no-unpublished-import
import SDK from '@ringcentral/sdk';
// eslint-disable-next-line node/no-unpublished-import
import waitFor from 'wait-for-async';

import RingCentral from '../src/index';
import RingCentralExtension from '../src/extensions/ringCentral';
import WebSocketExtension from '../src/extensions/webSocketLegacy';

jest.setTimeout(64000);

describe('extensions', () => {
  test('RingCentral Extension + WebSocket Extension', async () => {
    const rc = new RingCentral();

    // install RingCentral Extension
    const sdk = new SDK({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await sdk.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const ringCentralExtension = new RingCentralExtension(sdk);
    rc.installExtension(ringCentralExtension);

    // install WebSocket Extension
    const webSocketExtension = new WebSocketExtension({
      server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
      restOverWebSocket: true,
    });
    rc.installExtension(webSocketExtension);

    // setup subscription
    let eventCount = 0;
    await webSocketExtension.subscribe(
      ['/restapi/v1.0/account/~/extension/~/message-store'],
      event => {
        expect(event).toBeDefined();
        eventCount += 1;
      }
    );

    // Rest API call over WebSocket
    await rc
      .restapi()
      .account()
      .extension()
      .sms()
      .post({
        from: {phoneNumber: process.env.RINGCENTRAL_USERNAME!},
        to: [{phoneNumber: process.env.RINGCENTRAL_RECEIVER!}],
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

    await sdk.logout();
    await rc.revoke();
  });
});
