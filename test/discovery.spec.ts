import axios from 'axios';
import dotenv from 'dotenv-override-true';
import path from 'path';

dotenv.config({path: path.join(__dirname, '.env.prod')});

describe('discovery', () => {
  test('default', async () => {
    if (process.env.IS_PROD_ENV !== 'true') {
      return;
    }
    const r = await axios.get(
      `${process.env.RINGCENTRAL_DISCOVERY_SERVER}/.well-known/entry-points/initial?clientId=${process.env.RINGCENTRAL_CLIENT_ID}`
    );
    console.log(r.data);
  });
});
