import RingCentral from '@rc-ex/core';

// eslint-disable-next-line import/prefer-default-export
export const createRingCentral = async (): Promise<RingCentral> => {
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
};
