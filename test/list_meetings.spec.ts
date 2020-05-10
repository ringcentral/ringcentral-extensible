/* eslint-env jest */
import RingCentral from '../src/index';

jest.setTimeout(64000);

describe('list meetings', () => {
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
    const meetingList = await rc
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    expect(meetingList).not.toBeUndefined();
    expect(meetingList.records).not.toBeUndefined();
    await rc.revoke();
  });
});
