import RingCentral from '@rc-ex/core';
import {
  CreateFaxMessageRequest,
  Attachment,
  FaxResponse,
} from '@rc-ex/core/lib/definitions';
import Utils from '@rc-ex/core/lib/Utils';
import fs from 'fs';
import path from 'path';

import {testRingCentral} from './utils';

describe('fax', () => {
  test('send fax', async () => {
    const testCase = async (rc: RingCentral) => {
      const createFaxMessageRequest = new CreateFaxMessageRequest();
      createFaxMessageRequest.to = [
        {phoneNumber: process.env.RINGCENTRAL_RECEIVER},
      ];
      const attachment1 = new Attachment();
      attachment1.filename = 'text.txt';
      attachment1.content = 'hello world';
      attachment1.contentType = 'text/plain';
      const attachment2 = new Attachment();
      attachment2.filename = 'text.png';
      attachment2.content = fs.createReadStream(
        path.join(__dirname, 'test.png')
      );
      attachment2.contentType = 'image/png';
      createFaxMessageRequest.attachments = [attachment1, attachment2];
      const messageInfo = await rc
        .restapi()
        .account()
        .extension()
        .fax()
        .post(createFaxMessageRequest);
      expect(messageInfo).not.toBeUndefined();
      expect(messageInfo.id).not.toBeUndefined();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    // await testRingCentral(testCase, 'wss'); // This does not work. WSG doesn't support multipart/form-data
  });

  test('send fax - low level api', async () => {
    const testCase = async (rc: RingCentral) => {
      const attachment1 = new Attachment();
      attachment1.filename = 'text.txt';
      attachment1.content = 'hello world';
      attachment1.contentType = 'text/plain';
      const attachment2 = new Attachment();
      attachment2.filename = 'text.png';
      attachment2.content = fs.createReadStream(
        path.join(__dirname, 'test.png')
      );
      attachment2.contentType = 'image/png';
      const formData = Utils.getFormData({
        attachments: [attachment1, attachment2],
        to: [{phoneNumber: process.env.RINGCENTRAL_RECEIVER, name: 'To Name'}],
      });
      const r = await rc.post<FaxResponse>(
        '/restapi/v1.0/account/~/extension/~/fax',
        formData
      );
      const messageInfo = r.data;
      expect(messageInfo).not.toBeUndefined();
      expect(messageInfo.id).not.toBeUndefined();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    // await testRingCentral(testCase, 'wss'); // This does not work. WSG doesn't support multipart/form-data
  });
});
