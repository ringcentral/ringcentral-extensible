/* eslint-env jest */
import delay from 'delay';

import RestClient from '../src/index';

jest.setTimeout(64000);

describe('WSG', () => {
  test('subscription', async () => {
    const rc = new RestClient(
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
    // await rc.wsg!.subscribe(
    //   ['/restapi/v1.0/account/~/extension/~/message-store'],
    //   event => {
    //     console.log(event);
    //   }
    // );
    // await rc
    //   .restapi()
    //   .account()
    //   .extension()
    //   .sms()
    //   .post({
    //     from: {phoneNumber: process.env.RINGCENTRAL_USERNAME!},
    //     to: [{phoneNumber: process.env.RINGCENTRAL_RECEIVER!}],
    //     text: 'Hello world',
    //   });
    // await delay(5000);
    await rc.revoke();
  });
});
