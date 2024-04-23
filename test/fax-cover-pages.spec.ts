import ReusableRestClient from './reusable-rest-client';

describe('fax cover pages', () => {
  test('fax cover pages', async () => {
    const rc = await ReusableRestClient.getInstance();
    const faxCoverPages = await rc.restapi().dictionary().faxCoverPage().get();
    expect(faxCoverPages.records?.length).toBeGreaterThan(0);
    expect(faxCoverPages.records?.[0].name).toBe('None');
  });
});
