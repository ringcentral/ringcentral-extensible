import dotenv from 'dotenv-override-true';
import path from 'path';
import RingCentral from '@rc-ex/core';
import DiscoveryExtension from '@rc-ex/discovery';
import DebugExtension from '@rc-ex/debug';

dotenv.config({path: path.join(__dirname, '.env.prod')});

describe('discovery', () => {
  test('default', async () => {
    if (process.env.IS_PROD_ENV !== 'true') {
      return;
    }
    const rc = new RingCentral();
    const debugExtension = new DebugExtension();
    rc.installExtension(debugExtension);
    debugExtension.enabled = false; // comment out this line to enable debug mode
    const discoveryExtension = new DiscoveryExtension({
      discoveryServer: process.env.RINGCENTRAL_DISCOVERY_SERVER!,
      brandId: '1210',
    });
    rc.installExtension(discoveryExtension);
    await discoveryExtension.discover(); // discover entry points
    const versionInfo = await rc.restapi().get();
    expect(versionInfo).toBeDefined();
  });
});
