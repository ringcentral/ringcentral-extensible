import RingCentral from '../packages/core';
import WebsocketExtension from '../packages/ws-legacy';

export const testRingCentral = async (
  testCase: (rc: RingCentral) => Promise<void>,
  transport: 'https' | 'wss' = 'https'
) => {
  const rc = await createRingCentral(transport);
  await testCase(rc);
};

export const createRingCentral = async (
  transport: 'https' | 'wss' = 'https'
): Promise<RingCentral> => {
  if (transport === 'https') {
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
    return rc;
  } else {
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
    const websocketExtension = new WebsocketExtension({
      server: process.env.RINGCENTRAL_WSG_SERVER_URL!,
      restOverWebSocket: true,
    });
    await rc.installExtension(websocketExtension);
    return rc;
  }
};
