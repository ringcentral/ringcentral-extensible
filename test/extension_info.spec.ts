/* eslint-env jest */
import RestClient from '../src/index';

jest.setTimeout(64000);

describe('HTTP GET', () => {
  test('get extension info', async () => {
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
    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo).not.toBeUndefined();
    expect(extensionInfo.id).not.toBeUndefined();
    await rc.revoke();
  });
});
