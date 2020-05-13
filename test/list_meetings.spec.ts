/* eslint-env jest */
import RingCentral from '../src/index';

import {testRingCentral} from './utils';

jest.setTimeout(64000);

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
    testRingCentral(testCase);
    testRingCentral(testCase, 'wss');
  });
});
