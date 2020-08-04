import RingCentral from '@rc-ex/core';
import AuthorizeUriExtension from '@rc-ex/authorize-uri';

describe('Authorize URI Extension', () => {
  test('default', async () => {
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    const authorizeUriExtension = new AuthorizeUriExtension();
    await rc.installExtension(authorizeUriExtension);
    expect(authorizeUriExtension.buildUri).toBeDefined();
  });
});
