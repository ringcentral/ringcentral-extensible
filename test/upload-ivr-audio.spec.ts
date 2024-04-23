import fs from 'fs';

import ReusableRestClient from './reusable-rest-client';

describe('IVR Audio', () => {
  test('upload', async () => {
    const rc = await ReusableRestClient.getInstance();
    await rc
      .restapi()
      .account()
      .ivrPrompts()
      .post({
        name: 'Uploaded via API',
        attachment: {
          filename: 'test.mp3',
          contentType: 'audio/mpeg',
          content: fs.readFileSync('./test.mp3'),
        },
      });
  });
});
