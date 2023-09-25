import { SDK } from '@ringcentral/sdk';
import waitFor from 'wait-for-async';
// import dotenv from 'dotenv-override-true';
// import path from 'path';

import RingCentral from '@rc-ex/core';
import RcSdkExtension from '@rc-ex/rcsdk';
import WebSocketExtension from '@rc-ex/ws';

// dotenv.config({path: path.join(__dirname, '.env.lab')});

describe('extensions', () => {
  test('RingCentral Extension + WebSocket Extension', async () => {
    // if (process.env.IS_LAB_ENV !== 'true') {
    //   return;
    // }
    const rc = new RingCentral();

    // install RingCentral Extension
    const sdk = new SDK({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await sdk.login({
      jwt: process.env.RINGCENTRAL_JWT_TOKEN,
    });
    const rcSdkExtension = new RcSdkExtension({ rcSdk: sdk });
    await rc.installExtension(rcSdkExtension);

    // install WebSocket Extension
    const webSocketExtension = new WebSocketExtension({
      restOverWebSocket: true,
    });
    await rc.installExtension(webSocketExtension);

    // setup subscription
    let eventCount = 0;
    await webSocketExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (event) => {
      expect(event).toBeDefined();
      eventCount += 1;
    });

    // Rest API call over WebSocket
    await rc
      .restapi()
      .account()
      .extension()
      .companyPager()
      .post({
        from: { extensionNumber: '101' },
        to: [{ extensionNumber: '101' }], // send pager to oneself
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
