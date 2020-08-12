import {createRingCentral} from './utils';

describe('SMS', () => {
  test('send', async () => {
    const rc = await createRingCentral();
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
    await rc.revoke();
  });
});
