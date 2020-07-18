import RingCentral from '@rc-ex/core';

import {testRingCentral} from './utils';

describe('HTTP GET', () => {
  test('get extension info', async () => {
    const testCase = async (rc: RingCentral) => {
      const extensionInfo = await rc.restapi().account().extension().get();
      expect(extensionInfo).not.toBeUndefined();
      expect(extensionInfo.id).not.toBeUndefined();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
