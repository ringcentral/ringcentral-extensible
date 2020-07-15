/* eslint-disable node/no-unpublished-import */
/* eslint-env jest */
import path from 'path';
import dotenv from 'dotenv-override-true';

import RingCentral from '../../packages/core';
import WebSocketExtension from '../../packages/ws';

jest.setTimeout(128000);
dotenv.config({path: path.join(__dirname, '..', '..', '.env.lab')});

describe('WSG', () => {
  test('Rest API call via WebSocket', async () => {
    if (!process.env.IS_LAB_ENV) {
      return;
    }
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const webSocketExtension = new WebSocketExtension({
      restOverWebSocket: true,
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);
    const extInfo = await rc.restapi().account().extension().get();
    expect(extInfo).toBeDefined();
    expect(extInfo.id).toBeDefined();
    await rc.revoke();
  });
});
