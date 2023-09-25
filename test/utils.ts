import RingCentral from '@rc-ex/core';

export const createRingCentral = async (): Promise<RingCentral> => {
  const rc = new RingCentral({
    clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    server: process.env.RINGCENTRAL_SERVER_URL!,
  });
  await rc.login({
    jwt: process.env.RINGCENTRAL_JWT_TOKEN!,
  });
  return rc;
};
