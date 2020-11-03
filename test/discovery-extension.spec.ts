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
    const discoveryExtension = new DiscoveryExtension({
      discoveryServer: process.env.RINGCENTRAL_DISCOVERY_SERVER!,
      brandId: '1210',
    });
    rc.installExtension(discoveryExtension);
    await discoveryExtension.discover();
    await rc.restapi().get();
  });
});
