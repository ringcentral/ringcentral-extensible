/* eslint-env jest */
// eslint-disable-next-line node/no-unpublished-import
import SDK from '@ringcentral/sdk';

import RingCentral from '../src/index';
import RingCentralExtension from '../src/extensions/ringCentral';

jest.setTimeout(64000);

describe('RingCentral extension', () => {
  test('default', async () => {
    const sdk = new SDK({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await sdk.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });

    const rc = new RingCentral();
    const ringCentralExtension = new RingCentralExtension(sdk);
    rc.installExtension(ringCentralExtension);

    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo.id).toBeDefined();
    expect(extensionInfo.extensionNumber).toBeDefined();

    await sdk.logout();
  });
});
