/* eslint-env jest */
import {createRingCentral} from './utils';

jest.setTimeout(64000);

describe('HTTP GET', () => {
  test('get extension info', async () => {
    const f = async (transport: 'https' | 'wss') => {
      const rc = await createRingCentral(transport);
      const extensionInfo = await rc.restapi().account().extension().get();
      expect(extensionInfo).not.toBeUndefined();
      expect(extensionInfo.id).not.toBeUndefined();
      await rc.revoke();
    };
    await f('https');
    await f('wss');
  });
});
