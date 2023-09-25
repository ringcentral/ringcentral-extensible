import Utils from '@rc-ex/core/lib/Utils';
import type FaxResponse from '@rc-ex/core/lib/definitions/FaxResponse';
import type GetMessageInfoResponse from '@rc-ex/core/lib/definitions/GetMessageInfoResponse';
import fs from 'fs';
import path from 'path';

import { createRingCentral } from './utils';

describe('low level API', () => {
  test('sms', async () => {
    const rc = await createRingCentral();
    const r = await rc.post<GetMessageInfoResponse>('/restapi/v1.0/account/~/extension/~/sms', {
      from: {
        phoneNumber: process.env.RINGCENTRAL_USERNAME!,
      },
      to: [
        {
          phoneNumber: process.env.RINGCENTRAL_RECEIVER,
        },
      ],
      text: 'hello world',
    });
    const messageInfo = r.data;
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
    await rc.revoke();
  });
  test('fax', async () => {
    const rc = await createRingCentral();
    const requestBody = {
      to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }],
      attachments: [
        {
          filename: 'test.txt',
          content: 'hello world',
          contentType: 'text/plain',
        },
        {
          filename: 'test.png',
          content: fs.createReadStream(path.join(__dirname, 'test.png')),
          contentType: 'image/png',
        },
      ],
    };
    const formData = await Utils.getFormData(requestBody);
    const r = await rc.post<FaxResponse>('/restapi/v1.0/account/~/extension/~/fax', formData);
    const messageInfo = r.data;
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
    await rc.revoke();
    // we don't test WSG because WSG doesn't support multipart/form-data
  });
});
