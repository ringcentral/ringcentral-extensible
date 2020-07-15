/* eslint-env jest */
import RingCentral from '../packages/core';
import {testRingCentral} from './utils';
import DebugExtension from '../packages/debug';

jest.setTimeout(64000);

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
