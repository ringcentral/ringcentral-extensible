/* eslint-env jest */
import fs from 'fs';
import path from 'path';

import {createRingCentral} from './utils';

jest.setTimeout(64000);

describe('fax', () => {
  test('download fax', async () => {
    const f = async (transport: 'https' | 'wss') => {
      const rc = await createRingCentral(transport);
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
      // console.log(faxMessages.records?.[0].attachments?.[0].uri!);
      const buffer = await rc.get(
        faxMessages.records?.[0].attachments?.[0].uri!,
        undefined,
        {responseType: 'arraybuffer'}
      );
      fs.writeFileSync(path.join(__dirname, 'temp.pdf'), buffer);
      await rc.revoke();
    };
    await f('https');
    // await f('wss'); // todo: https://jira.ringcentral.com/browse/PLA-49506
  });
});
