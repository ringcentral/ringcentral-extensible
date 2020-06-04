/* eslint-env jest */
import waitFor from 'wait-for-async';

import RingCentral from '../src/index';
import {createRingCentral} from './utils';

jest.setTimeout(64000);

const testSubscription = async (rc: RingCentral) => {
  let eventCount = 0;
  await rc.wsg!.subscribe(
    ['/restapi/v1.0/account/~/extension/~/message-store'],
    event => {
      expect(event).toBeDefined();
      eventCount += 1;
    }
  );
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
};

describe('WSG', () => {
  test('Subscription with external token', async () => {
    // assume that we got `externalToken` from somewhere else
    const externalToken = (await createRingCentral()).token;
    const rc = new RingCentral(
      {
        server: process.env.RINGCENTRAL_SERVER_URL!,
        token: externalToken,
      },
      {
        server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
      }
    );
    await testSubscription(rc);
  });
  test('subscription with self generated token', async () => {
    const rc = new RingCentral(
      {
        clientId: process.env.RINGCENTRAL_CLIENT_ID!,
        clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
        server: process.env.RINGCENTRAL_SERVER_URL!,
      },
      {
        server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
      }
    );
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    await testSubscription(rc);
  });
  test('Rest API call via WebSocket', async () => {
    const rc = new RingCentral(
      {
        clientId: process.env.RINGCENTRAL_CLIENT_ID!,
        clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
        server: process.env.RINGCENTRAL_SERVER_URL!,
      },
      {
        server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
      }
    );
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });

    // options 1: specify transport as 'wss' when making an API call
    const extInfo = await rc
      .restapi()
      .account()
      .extension()
      .get({transport: 'wss'}); // use WebSocket as transport protocol for this API call
    expect(extInfo).toBeDefined();
    expect(extInfo.id).toBeDefined();

    // options 2: make WebSocket the default transport protocol
    rc.defaults.transport = 'wss'; // use WebSocket as transport protocol for every API call
    const extInfo2 = await rc.restapi().account().extension().get();
    expect(extInfo2).toBeDefined();
    expect(extInfo2.id).toBeDefined();

    await rc.revoke();
  });
});
