import {RestResponse} from '@rc-ex/core/lib/Rest';
import RestException from '@rc-ex/core/lib/RestException';

import {createRingCentral} from './utils';

describe('Exceptions', () => {
  test('400', async () => {
    const rc = await createRingCentral();
    let exception = false;
    try {
      // no to number
      await rc
        .restapi()
        .account()
        .extension()
        .sms()
        .post({text: 'Hello world'});
    } catch (e) {
      exception = true;
      expect(e instanceof RestException).toBeTruthy();
      const re = e as {response: RestResponse};
      expect(re.response.status).toBe(400);
    } finally {
      expect(exception).toBeTruthy();
    }
    await rc.revoke();
  });

  test('404', async () => {
    const rc = await createRingCentral();
    let exception = false;
    try {
      await rc.post(
        rc.restapi().account().extension().path(true) + '/does-not-exist',
        {text: 'Hello world'}
      );
    } catch (e) {
      exception = true;
      expect(e instanceof RestException).toBeTruthy();
      const re = e as {response: RestResponse};
      expect(re.response.status).toBe(404);
    } finally {
      expect(exception).toBeTruthy();
    }
    await rc.revoke();
  });
});
