import RingCentral from '@rc-ex/core';
import RcSdkExtension from '@rc-ex/rcsdk';
import { SDK } from '@ringcentral/sdk';

describe('RingCentral extension', () => {
  test('default', async () => {
    const sdk = new SDK({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await sdk.login({
      jwt: process.env.RINGCENTRAL_JWT_TOKEN,
    });

    const rc = new RingCentral();
    const rcSdkExtension = new RcSdkExtension({ rcSdk: sdk });
    await rc.installExtension(rcSdkExtension);

    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo.id).toBeDefined();
    expect(extensionInfo.extensionNumber).toBeDefined();

    await sdk.logout();
    await rcSdkExtension.revoke();
  });
});
