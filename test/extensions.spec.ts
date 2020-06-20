/* eslint-env jest */
// eslint-disable-next-line node/no-unpublished-import
import SDK from '@ringcentral/sdk';

import RingCentral from '../src/index';
import RingCentralExtension from '../src/extensions/ringCentral';
import WebSocketExtension from '../src/extensions/webSocket';

jest.setTimeout(64000);

describe('extensions', () => {
  test('RingCentral Extension + WebSocket Extension', async () => {
    const rc = new RingCentral();

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
    const ringCentralExtension = new RingCentralExtension(sdk);
    rc.installExtension(ringCentralExtension);

    const webSocketExtension = new WebSocketExtension({
      server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
      restOverWebSocket: true,
    });
    rc.installExtension(webSocketExtension);

    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo.id).toBeDefined();
    expect(extensionInfo.extensionNumber).toBeDefined();

    await sdk.logout();
    await rc.revoke();
  });
});
