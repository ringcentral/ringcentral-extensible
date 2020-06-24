/* eslint-disable node/no-unpublished-import */
/* eslint-env jest */
import waitFor from 'wait-for-async';

import RingCentral from '../src/index';
import PubNubExtension from '../src/extensions/pubNub';

jest.setTimeout(64000);

describe('PubNub extension', () => {
  test('default', async () => {
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
    const pubNubExtension = new PubNubExtension();
    rc.installExtension(pubNubExtension);
    let eventCount = 0;
    await pubNubExtension.subscribe(
      [
        // '/restapi/v1.0/account/~/extension/~/message-store',
        '/restapi/v1.0/account/~/extension/~/message-store/instant?type=SMS',
      ],
      body => {
        expect(body).toBeDefined();
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
