import ReusableRestClient from './reusable-rest-client';

describe('Forward all company calls', () => {
  test('patch', async () => {
    const rc = await ReusableRestClient.getInstance();
    const r = await rc.restapi().account().forwardAllCalls().patch({
      enabled: false,
    });
    expect(r.enabled).toBe(false);
  });
});
