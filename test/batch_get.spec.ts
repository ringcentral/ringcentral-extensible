/* eslint-env jest */
import {createRingCentral} from './utils';

jest.setTimeout(64000);

describe('batch get', () => {
  test("get extension's presence info", async () => {
    const f = async (transport: 'https' | 'wss') => {
      const rc = await createRingCentral(transport);
      const extensions = await rc.restapi().account().extension().list({
        perPage: 30,
      }); // batch requests limited to 30 max
      expect(extensions.records?.length).toBeGreaterThan(1);
      const r = await rc.get(
        `/restapi/v1.0/account/~/extension/${extensions.records
          ?.map(r => r.id)
          .join(',')}/presence`
      );
      expect(r).not.toBeNull();
      expect(r.data).not.toBeNull();
      expect(r.data).toContain('--Boundary');
      await rc.revoke();
    };
    await f('https');
    // await f('wss'); // todo: enable this test, ref: https://jira.ringcentral.com/browse/PLA-49505
  });
});
