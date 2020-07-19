import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

import {testRingCentral} from './utils';

describe('Debug Mode Extension', () => {
  test('default', async () => {
    const testCase = async (rc: RingCentral) => {
      const debugExtension = new DebugExtension();
      await rc.installExtension(debugExtension);
      debugExtension.enabled = false; // remove this line to print API traffic
      await rc.restapi().account().extension().get();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
