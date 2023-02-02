// import fs from 'fs';

import { createRingCentral } from './utils';

describe('IVR Audio', () => {
  test('upload', async () => {
    const rc = await createRingCentral();
    // todo: https://jira.ringcentral.com/browse/PLA-73273
    // await rc
    //   .restapi()
    //   .account()
    //   .ivrPrompts()
    //   .post({
    //     name: 'Uploaded via API',
    //     attachment: {
    //       filename: 'test.mp3',
    //       contentType: 'audio/mpeg',
    //       content: fs.readFileSync('./test.mp3'),
    //     },
    //   });
    await rc.revoke();
  });
});
