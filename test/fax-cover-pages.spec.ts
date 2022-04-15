import { createRingCentral } from './utils';

describe('fax cover pages', () => {
  test('fax cover pages', async () => {
    const rc = await createRingCentral();
    const faxCoverPages = await rc.restapi().dictionary().faxCoverPage().get();
    expect(faxCoverPages.records?.length).toBeGreaterThan(0);
    expect(faxCoverPages.records?.[0].name).toBe('None');
    await rc.revoke();
  });
});
