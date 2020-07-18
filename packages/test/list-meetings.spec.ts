import RingCentral from '@rc-ex/core';

import {testRingCentral} from './utils';

describe('list meetings', () => {
  test('default', async () => {
    const testCase = async (rc: RingCentral) => {
      const meetingList = await rc
        .restapi()
        .account()
        .extension()
        .meeting()
        .list();
      expect(meetingList).not.toBeUndefined();
      expect(meetingList.records).not.toBeUndefined();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
