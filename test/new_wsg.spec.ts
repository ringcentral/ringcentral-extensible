/* eslint-env jest */
// eslint-disable-next-line node/no-unpublished-import
import dotenv from 'dotenv-override-true';
import path from 'path';

import './types.d';
import RingCentral from '../src/index';
import {WsToken} from '../src/extensions/webSocket/types';

jest.setTimeout(64000);
dotenv.config({path: path.join(__dirname, '..', '.env.lab')});

describe('new WSG', () => {
  test('wstoken', async () => {
    if (!process.env.IS_LAB_ENV) {
      return;
    }
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
    const r = await rc.post('/restapi/oauth/wstoken');
    const wsToken = r.data as WsToken;
    console.log(wsToken);
    await rc.revoke();
  });
});
