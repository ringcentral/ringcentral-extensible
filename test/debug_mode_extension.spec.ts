/* eslint-env jest */
import RingCentral from '../src/index';
import {testRingCentral} from './utils';
import DebugModeExtension from '../src/extensions/debugMode';

jest.setTimeout(64000);

describe('Debug mode', () => {
  test('default', async () => {
    const testCase = async (rc: RingCentral) => {
      const debugModeExtension = new DebugModeExtension();
      rc.installExtension(debugModeExtension);
      debugModeExtension.enabled = false; // remove this line to print API traffic
      await rc.restapi().account().extension().get();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
