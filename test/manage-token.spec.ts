import RingCentral from '@rc-ex/core';

describe('manage token', () => {
  test('get and set token', async () => {
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

    // get token
    const tokenInfo = rc.token;

    // optionally save the token somewhere and read it back

    // set token
    rc.token = tokenInfo;

    // if you only have the access token string
    // rc.token = {
    //   access_token: '...'
    // }

    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo).not.toBeUndefined();
    expect(extensionInfo.id).not.toBeUndefined();
    await rc.revoke();
  });
});
