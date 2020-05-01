/* eslint-env jest */
import RestClient from '../src/index';

describe('authorize', () => {
  test('password flow', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    const tokenInfo = await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    expect(tokenInfo).not.toBeUndefined();
    expect(tokenInfo.access_token).not.toBeUndefined();
  });
  test('refresh', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    const _tokenInfo = await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const tokenInfo = await rc.refresh();
    expect(tokenInfo).not.toBeUndefined();
    expect(tokenInfo.access_token).not.toBeUndefined();
    expect(tokenInfo.access_token).not.toEqual(_tokenInfo.access_token);
  });
  test('revoke', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    expect(rc.token).not.toBeUndefined();
    await rc.revoke();
    expect(rc.token).toBeUndefined();
  });
});
