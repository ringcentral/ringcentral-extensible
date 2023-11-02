import WebSocketExtension from '@rc-ex/ws';
import waitFor from 'wait-for-async';
import { createRingCentral } from '../utils';

jest.setTimeout(99999999); // to test recover failed

describe('WebSocket session recovery', () => {
  test('default ', async () => {
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
      restOverWebSocket: true,
    });
    await rc.installExtension(webSocketExtension);
    expect(webSocketExtension.connectionDetails.recoveryState).toBeUndefined();
    let eventCount = 0;
    await webSocketExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (event: any) => {
      expect(event).toBeDefined();
      eventCount += 1;
    });
    // close WebSocket connection to simulate session lost
    // here we don't invoke webSocketExtension.revoke() because that will also revoke all subscriptions created
    webSocketExtension.ws.close();
    await waitFor({ interval: 1000 });
    await webSocketExtension.recover();
    // sandbox doesn't support stickiness, so recovery may fail.
    expect(
      ['Successful', 'Failed'].indexOf(webSocketExtension.connectionDetails.recoveryState ?? '') !== -1,
    ).toBeTruthy();
    // expect(webSocketExtension.connectionDetails.recoveryState).toBe(
    //   'Successful',
    // );
    await rc
      .restapi()
      .account()
      .extension()
      .companyPager()
      .post({
        from: { extensionId: rc.token!.owner_id! },
        to: [{ extensionId: rc.token!.owner_id! }], // send pager to oneself
        text: 'Hello world',
      });
    const successful = await waitFor({
      condition: () => eventCount > 0,
      interval: 1000,
      times: 20,
    });
    await rc.revoke();
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
  });

  test('connect but do not recover session ', async () => {
    if (process.env.IS_LAB_ENV !== 'true') {
      return;
    }
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
      restOverWebSocket: true,
    });
    await rc.installExtension(webSocketExtension);
    expect(webSocketExtension.connectionDetails.recoveryState).toBeUndefined();
    let eventCount = 0;
    await webSocketExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (event: any) => {
      expect(event).toBeDefined();
      eventCount += 1;
    });
    // close WebSocket connection to simulate session lost
    // here we don't invoke webSocketExtension.revoke() because that will also revoke all subscriptions created
    webSocketExtension.ws.close();
    await waitFor({ interval: 1000 });
    await webSocketExtension.connect(false); // connect but do not recover session
    expect(webSocketExtension.connectionDetails.recoveryState).toBeUndefined();
    await rc
      .restapi()
      .account()
      .extension()
      .companyPager()
      .post({
        from: { extensionId: rc.token!.owner_id! },
        to: [{ extensionId: rc.token!.owner_id! }], // send pager to oneself
        text: 'Hello world',
      });
    const successful = await waitFor({
      condition: () => eventCount > 0,
      interval: 1000,
      times: 20,
    });
    await rc.revoke();
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
  });

  test('re-connect existing session', async () => {
    if (process.env.IS_LAB_ENV !== 'true') {
      return;
    }
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);
    expect(webSocketExtension.connectionDetails.recoveryState).toBeUndefined();
    let eventCount = 0;
    await webSocketExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (event: any) => {
      expect(event).toBeDefined();
      eventCount += 1;
    });
    // already connected, connect again will not cause any issues
    await webSocketExtension.recover();
    // because it didn't try to recover at all since you had an open WS connection
    expect(webSocketExtension.connectionDetails.recoveryState).toBe(undefined);
    await rc
      .restapi()
      .account()
      .extension()
      .companyPager()
      .post({
        from: { extensionId: rc.token!.owner_id! },
        to: [{ extensionId: rc.token!.owner_id! }], // send pager to oneself
        text: 'Hello world',
      });
    const successful = await waitFor({
      condition: () => eventCount > 0,
      interval: 1000,
      times: 20,
    });
    await rc.revoke();
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
  });

  // comment out because it takes too long to finish.
  // uncomment when you want to test it
  // test('too late to recover', async () => {
  //   if (process.env.IS_LAB_ENV !== 'true') {
  //     return;
  //   }
  //   const rc = new RingCentral({
  //     clientId: process.env.RINGCENTRAL_CLIENT_ID!,
  //     clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
  //     server: process.env.RINGCENTRAL_SERVER_URL!,
  //   });
  //   await rc.login({
  //     username: process.env.RINGCENTRAL_USERNAME!,
  //     extension: process.env.RINGCENTRAL_EXTENSION!,
  //     password: process.env.RINGCENTRAL_PASSWORD!,
  //   });
  //   const webSocketExtension = new WebSocketExtension({
  //     // debugMode: true,
  //   });
  //   await rc.installExtension(webSocketExtension);
  //   console.log(JSON.stringify(webSocketExtension.connectionDetails, null, 2));
  //   expect(
  //     webSocketExtension.connectionDetails.recoveryState
  //   ).toBeUndefined();
  //   let eventCount = 0;
  //   await webSocketExtension.subscribe(
  //     ['/restapi/v1.0/account/~/extension/~/message-store/instant?type=SMS'],
  //     event => {
  //       expect(event).toBeDefined();
  //       eventCount += 1;
  //     }
  //   );
  //   // close WebSocket connection to simulate session lost
  //   // here we don't invoke webSocketExtension.revoke() because that will also revoke all subscriptions created
  //   webSocketExtension.ws.close();
  //   await waitFor({
  //     interval:
  //       webSocketExtension.connectionDetails!.body.recoveryTimeout * 1000 +
  //       600000,
  //   });
  //   await webSocketExtension.recover();
  //   console.log(JSON.stringify(webSocketExtension.connectionDetails, null, 2));
  //   expect(webSocketExtension.connectionDetails.recoveryState).toBe(
  //     'Failed'
  //   );
  //   eventCount = 0;
  //   await rc
  //     .restapi()
  //     .account()
  //     .extension()
  //     .sms()
  //     .post({
  //       from: {phoneNumber: process.env.RINGCENTRAL_USERNAME!},
  //       to: [{phoneNumber: process.env.RINGCENTRAL_USERNAME!}], // send sms to oneself
  //       text: 'Hello world',
  //     });
  //   const successful = await waitFor({
  //     condition: () => eventCount > 0,
  //     interval: 1000,
  //     times: 30,
  //   });
  //   await rc.revoke();
  //   expect(successful).toBeTruthy();
  //   expect(eventCount).toBeGreaterThan(0);
  // });
});
