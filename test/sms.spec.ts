/* eslint-env jest */
import RingCentral from '../packages/core';
import {testRingCentral} from './utils';

jest.setTimeout(64000);

describe('SMS', () => {
  test('send', async () => {
    const testCase = async (rc: RingCentral) => {
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
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
