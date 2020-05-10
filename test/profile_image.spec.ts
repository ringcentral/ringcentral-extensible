/* eslint-env jest */
import fs from 'fs';
import path from 'path';

import RingCentral from '../src/index';

jest.setTimeout(64000);

describe('Profile image', () => {
  test('download', async () => {
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
    const buffer = await rc
      .restapi()
      .account()
      .extension()
      .profileImage()
      .list();
    expect(buffer.constructor.name).toBe('Buffer');
    fs.writeFileSync(path.join(__dirname, 'temp.png'), buffer);
    await rc.revoke();
  });
});
