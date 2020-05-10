/* eslint-env jest */
import RingCentral from '../src/index';
import Utils from '../src/Utils';

jest.setTimeout(64000);

describe('WSG', () => {
  test('subscription', async () => {
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
    const successful = await Utils.waitUntil(1000, 30, () => eventCount > 0);
    await rc.revoke();
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
  });
  test('Rest API call', async () => {
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
    const extInfo = await rc
      .restapi()
      .account()
      .extension()
      .get({transport: 'wss'});
    expect(extInfo).toBeDefined();
    expect(extInfo.id).toBeDefined();
    await rc.revoke();
  });
});
