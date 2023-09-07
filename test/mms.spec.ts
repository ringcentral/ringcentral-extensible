import RingCentral from '@rc-ex/core';
import CreateMMSMessage from '@rc-ex/core/lib/definitions/CreateMMSMessage';
import Attachment from '@rc-ex/core/lib/definitions/Attachment';
import fs from 'fs';
import path from 'path';
import { createRingCentral } from './utils';

describe('mms', () => {
  test('send mms', async () => {
    const rc = await createRingCentral();
    const createMMSMessage: CreateMMSMessage = {};
    createMMSMessage.from = { phoneNumber: process.env.RINGCENTRAL_USERNAME! };
    createMMSMessage.to = [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }];
    const attachment: Attachment = {};
    attachment.filename = 'text.png';
    attachment.content = fs.createReadStream(path.join(__dirname, 'test.png'));
    attachment.contentType = 'image/png';
    createMMSMessage.attachments = [attachment];
    const messageInfo = await rc
      .restapi()
      .account()
      .extension()
      .mms()
      .post(createMMSMessage);
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
    await rc.revoke();
    // we don't test WSG because WSG doesn't support multipart/form-data
  });
});
