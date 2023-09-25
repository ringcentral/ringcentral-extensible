import WebSocketExtension from '@rc-ex/ws';
import waitFor from 'wait-for-async';
import { createRingCentral } from '../utils';
// import path from 'path';
// import dotenv from 'dotenv-override-true';

// dotenv.config({path: path.join(__dirname, '..', '.env.lab')});

describe('WebSocket', () => {
  test('subscription', async () => {
    // if (process.env.IS_LAB_ENV !== 'true') {
    //   return;
    // }
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
      // restOverWebSocket: true,
    });
    await rc.installExtension(webSocketExtension);

    // let presenceEventCount = 0;
    // await webSocketExtension.subscribe(
    //   ['/restapi/v1.0/account/~/extension/~/presence'],
    //   event => {
    //     expect(event).toBeDefined();
    //     presenceEventCount += 1;
    //   }
    // );

    let messageEventCount = 0;
    await webSocketExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (event) => {
      expect(event).toBeDefined();
      messageEventCount += 1;
    });

    await rc.restapi().account().extension().presence().put({
      userStatus: 'Busy',
      message: 'Hello world',
    });

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

    // const successful1 = await waitFor({
    //   condition: () => presenceEventCount > 0,
    //   interval: 1000,
    //   times: 60,
    // });
    // expect(successful1).toBeTruthy();
    const successful2 = await waitFor({
      condition: () => messageEventCount > 0,
      interval: 1000,
      times: 60,
    });
    expect(successful2).toBeTruthy();

    await rc.revoke();
  });
});
