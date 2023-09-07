import RingCentral from '@rc-ex/core';

import { createRingCentral } from './utils';

describe('authorize', () => {
  test('password flow', async () => {
    // because password flow is not recommended, we don't test it here
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
    const rc = await createRingCentral();
    const tokenInfo = rc.token!;
    const newTokenInfo = await rc.refresh();
    expect(newTokenInfo).not.toBeUndefined();
    expect(newTokenInfo.access_token).not.toBeUndefined();
    expect(newTokenInfo.access_token).not.toEqual(tokenInfo.access_token);
    await rc.revoke();
  });
  test('revoke', async () => {
    const rc = await createRingCentral();
    expect(rc.token).not.toBeUndefined();
    await rc.revoke();
    expect(rc.token).toBeUndefined();
  });
});
