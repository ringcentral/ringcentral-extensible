/* eslint-env jest */
import RingCentral from '../src/index';

jest.setTimeout(64000);

describe('batch get', () => {
  test("get extension's presence info", async () => {
    const f = async (transport: 'https' | 'wss') => {
      let rc: RingCentral;
      if (transport === 'https') {
        rc = new RingCentral({
          clientId: process.env.RINGCENTRAL_CLIENT_ID!,
          clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
          server: process.env.RINGCENTRAL_SERVER_URL!,
        });
      } else {
        // transport === 'wss'
        rc = new RingCentral(
          {
            clientId: process.env.RINGCENTRAL_CLIENT_ID!,
            clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
            server: process.env.RINGCENTRAL_SERVER_URL!,
          },
          {
            server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
          }
        );
      }
      await rc.login({
        username: process.env.RINGCENTRAL_USERNAME!,
        extension: process.env.RINGCENTRAL_EXTENSION!,
        password: process.env.RINGCENTRAL_PASSWORD!,
      });
      rc.defaults.transport = transport;

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
