import path from 'path';
import dotenv from 'dotenv-override-true';
import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

dotenv.config({path: path.join(__dirname, '.env.a2p')});

describe('SMS', () => {
  test('send', async () => {
    if (process.env.IS_A2P_ENV !== 'true') {
      return;
    }
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
    const debugExtension = new DebugExtension();
    rc.installExtension(debugExtension);
    debugExtension.enabled = false;
    const messageBatchResponse = await rc
      .restapi()
      .account()
      .a2pSms()
      .batch()
      .post({
        from: process.env.RINGCENTRAL_FROM!,
        text: 'hello world',
        messages: [
          {
            to: [process.env.RINGCENTRAL_TO!],
            text: 'hello world 2', // override 'hello world'
          },
        ],
      });
    expect(messageBatchResponse).not.toBeUndefined();
    await rc.revoke();
  });
});
