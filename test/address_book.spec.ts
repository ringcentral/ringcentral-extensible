/* eslint-env jest */
import RingCentral from '../packages/core';
import {testRingCentral} from './utils';

jest.setTimeout(64000);

describe('Address Book', () => {
  test('contacts', async () => {
    const testCase = async (rc: RingCentral) => {
      const r = await rc
        .restapi()
        .account()
        .extension()
        .addressBook()
        .contact()
        .list();
      expect(r).toBeDefined();
      expect(r.records).toBeDefined();
      expect(r.records!.length).toBeGreaterThanOrEqual(0); // by default address book is empty
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });

  test('extensions', async () => {
    const testCase = async (rc: RingCentral) => {
      const r = await rc
        .restapi()
        .account()
        .extension()
        // .list({email: 'tyler4long@gmail.com'}); // you can search user by email, and user id is also Glip id
        .list();
      expect(r).toBeDefined();
      expect(r.records).toBeDefined();
      expect(r.records!.length).toBeGreaterThan(0);
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
