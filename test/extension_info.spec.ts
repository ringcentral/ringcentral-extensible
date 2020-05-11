/* eslint-env jest */
import {testRingCentral} from './utils';
import RingCentral from '../src';

jest.setTimeout(64000);

describe('HTTP GET', () => {
  test('get extension info', async () => {
    const testCase = async (rc: RingCentral) => {
      const extensionInfo = await rc.restapi().account().extension().get();
      expect(extensionInfo).not.toBeUndefined();
      expect(extensionInfo.id).not.toBeUndefined();
      await rc.revoke();
    };
    await testRingCentral('https', testCase);
    await testRingCentral('wss', testCase);
  });
});
