import path from 'path';
import dotenv from 'dotenv-override-true';
import RingCentral from '@rc-ex/core';

dotenv.config({path: path.join(__dirname, '.env.a2p')});

describe('SMS', () => {
  test('send', async () => {
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
    // rc.restapi().account().a2pSms();
    // const messageInfo = await rc
    // expect(messageInfo).not.toBeUndefined();
    // expect(messageInfo.id).not.toBeUndefined();
    await rc.revoke();
  });
});
