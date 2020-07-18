import RingCentral from '@rc-ex/core';

import {testRingCentral} from './utils';

describe('fax cover pages', () => {
  test('fax cover pages', async () => {
    const testCase = async (rc: RingCentral) => {
      const faxCoverPages = await rc
        .restapi()
        .dictionary()
        .faxCoverPage()
        .get();
      expect(faxCoverPages.records?.length).toBeGreaterThan(0);
      expect(faxCoverPages.records?.[0].name).toBe('None');
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
