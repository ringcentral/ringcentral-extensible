import DebugExtension from '@rc-ex/debug';

import ReusableRestClient from './reusable-rest-client';

describe('Debug Extension', () => {
  test('default', async () => {
    const rc = await ReusableRestClient.getInstance();
    const debugExtension = new DebugExtension();
    await rc.installExtension(debugExtension);
    debugExtension.disable(); // remove this line to print API traffic
    await rc.restapi().account().extension().get();
    await debugExtension.revoke();
  });
});
