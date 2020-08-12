import DebugExtension from '@rc-ex/debug';

import {createRingCentral} from './utils';

describe('Debug Extension', () => {
  test('default', async () => {
    const rc = await createRingCentral();
    const debugExtension = new DebugExtension();
    await rc.installExtension(debugExtension);
    debugExtension.enabled = false; // remove this line to print API traffic
    await rc.restapi().account().extension().get();
    await rc.revoke();
  });
});
