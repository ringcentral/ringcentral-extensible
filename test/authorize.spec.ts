import ReusableRestClient from './reusable-rest-client';

describe('authorize', () => {
  test('password flow', async () => {
    // because password flow is deprecated, we don't test it
    // const rc = new RingCentral({
    //   clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    //   clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    //   server: process.env.RINGCENTRAL_SERVER_URL!,
    // });
    // const tokenInfo = await rc.login({
    //   username: process.env.RINGCENTRAL_USERNAME!,
    //   extension: process.env.RINGCENTRAL_EXTENSION!,
    //   password: process.env.RINGCENTRAL_PASSWORD!,
    // });
    // expect(tokenInfo).not.toBeUndefined();
    // expect(tokenInfo.access_token).not.toBeUndefined();
    // await rc.revoke();
  });

  test('refresh', async () => {
    const rc = await ReusableRestClient.getInstance();
    const tokenInfo = rc.token!;
    const newTokenInfo = await rc.refresh();
    expect(newTokenInfo).not.toBeUndefined();
    expect(newTokenInfo.access_token).not.toBeUndefined();
    expect(newTokenInfo.access_token).not.toEqual(tokenInfo.access_token);
  });

  // we don't test it any more becaue we need the token for other tests
  // test('revoke', async () => {
  //   const rc = await ReusableRestClient.getInstance();
  //   expect(rc.token).not.toBeUndefined();
  //   await rc.revoke();
  //   expect(rc.token).toBeUndefined();
  // });
});
