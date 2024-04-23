import ReusableRestClient from './reusable-rest-client';

describe('SMS', () => {
  test('send', async () => {
    const rc = await ReusableRestClient.getInstance();
    const path = await rc.restapi().v2().accounts().path();
    expect(path).toEqual('/restapi/v2/accounts/~');
  });
});
