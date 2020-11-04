import dotenv from 'dotenv-override-true';
import path from 'path';
import RingCentral from '@rc-ex/core';
import DiscoveryExtension from '@rc-ex/discovery';
import DebugExtension from '@rc-ex/debug';
import SDK from '@ringcentral/sdk';
import RingCentralExtension from '@rc-ex/rcsdk';

dotenv.config({path: path.join(__dirname, '.env.prod')});

describe('discovery', () => {
  test('default', async () => {
    if (process.env.IS_PROD_ENV !== 'true') {
      return;
    }
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID,
    });
    const debugExtension = new DebugExtension();
    rc.installExtension(debugExtension);
    debugExtension.enabled = false; // comment out this line to enable debug mode
    const discoveryExtension = new DiscoveryExtension({
      discoveryServer: process.env.RINGCENTRAL_DISCOVERY_SERVER!,
    });
    rc.installExtension(discoveryExtension);
    await discoveryExtension.discover(); // discover entry points
    const versionInfo = await rc.restapi().get();
    expect(versionInfo).toBeDefined();
  });

  test('with @ringcentral/sdk', async () => {
    if (process.env.IS_PROD_ENV !== 'true') {
      return;
    }
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID,
    });

    // install Discovery Extension
    const discoveryExtension = new DiscoveryExtension({
      discoveryServer: process.env.RINGCENTRAL_DISCOVERY_SERVER!,
    });
    rc.installExtension(discoveryExtension);
    await discoveryExtension.discover(); // discover entry points

    // install RingCentral Extension
    const sdk = new SDK({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: discoveryExtension.initialDiscovery!.coreApi.baseUri, // use the discovered entry point
    });
    await sdk.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const ringCentralExtension = new RingCentralExtension(sdk);
    await rc.installExtension(ringCentralExtension);

    const extInfo = await rc.restapi().account().extension().get();
    expect(extInfo).toBeDefined();
  });
});
