import { createRingCentral } from './utils';

describe('HTTP GET', () => {
  test('get extension info', async () => {
    const rc = await createRingCentral();
    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo).not.toBeUndefined();
    expect(extensionInfo.id).not.toBeUndefined();
    await rc.revoke();
  });
});
