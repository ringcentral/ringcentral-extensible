import { createRingCentral } from './utils';

describe('SMS', () => {
  test('send', async () => {
    const rc = await createRingCentral();
    const path = await rc.restapi().v2().accounts().path();
    expect(path).toEqual('/restapi/v2/accounts/~');
    await rc.revoke();
  });
});
