/* eslint-env jest */
import RestClient from '../src/index';

jest.setTimeout(64000);

describe('SMS', () => {
  test('send', async () => {
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
    const messageInfo = await rc
      .restapi()
      .account()
      .extension()
      .sms()
      .post({
        from: {
          phoneNumber: process.env.RINGCENTRAL_USERNAME!,
        },
        to: [
          {
            phoneNumber: process.env.RINGCENTRAL_RECEIVER,
          },
        ],
        text: 'hello world',
      });
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });
});
