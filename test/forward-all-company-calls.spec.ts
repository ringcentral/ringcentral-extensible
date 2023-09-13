import { createRingCentral } from './utils';

describe('Forward all company calls', () => {
  test('patch', async () => {
    const rc = await createRingCentral();
    const r = await rc.restapi().account().forwardAllCalls().patch({
      enabled: false,
    });
    expect(r.enabled).toBe(false);
    await rc.revoke();
  });
});
