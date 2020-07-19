import RingCentral from '@rc-ex/core';

import {testRingCentral} from './utils';

describe('message store', () => {
  test('every inbound fax should have from info', async () => {
    const testCase = async (rc: RingCentral) => {
      const messageList = await rc
        .restapi()
        .account()
        .extension()
        .messageStore()
        .list({
          messageType: ['Fax'],
          direction: ['Inbound'],
          dateFrom: '2010-04-15T17:18:00.000Z',
        });
      if (messageList.records?.length === 0) {
        await rc.revoke();
        return;
      }
      expect(messageList.records?.length).toBeGreaterThan(0);
      expect(messageList.records?.filter(r => 'from' in r).length).toBe(
        messageList.records?.length
      );
      const messageInfo = await rc
        .restapi()
        .account()
        .extension()
        .messageStore(messageList.records?.[0].id?.toString())
        .get();
      expect(messageInfo.from).toBeDefined();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
