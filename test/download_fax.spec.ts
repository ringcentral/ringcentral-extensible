/* eslint-env jest */
import fs from 'fs';
import path from 'path';

import RingCentral from '../src/index';

jest.setTimeout(64000);

describe('fax', () => {
  test('download fax', async () => {
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
    const faxMessages = await rc
      .restapi()
      .account()
      .extension()
      .messageStore()
      .list({
        messageType: ['Fax'],
        direction: ['Inbound'],
        dateFrom: '2015-04-15T17:18:00.000Z',
      });
    const buffer = await rc.get(
      faxMessages.records?.[0].attachments?.[0].uri!,
      undefined,
      {responseType: 'arraybuffer'}
    );
    fs.writeFileSync(path.join(__dirname, 'temp.pdf'), buffer);
    await rc.revoke();
  });
});
