/* eslint-env jest */
import RestException from '../src/RestException';
import {createRingCentral} from './utils';

jest.setTimeout(64000);

describe('Exceptions', () => {
  test('400', async () => {
    const f = async (transport: 'https' | 'wss') => {
      const rc = await createRingCentral(transport);
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
        expect(e.response.status).toBe(400);
      } finally {
        expect(exception).toBeTruthy();
      }
      await rc.revoke();
    };
    await f('https');
    await f('wss');
  });

  test('404', async () => {
    const f = async (transport: 'https' | 'wss') => {
      const rc = await createRingCentral(transport);
      let exception = false;
      try {
        await rc.post(
          rc.restapi().account().extension().path(true) + '/does-not-exist',
          {text: 'Hello world'}
        );
      } catch (e) {
        exception = true;
        expect(e instanceof RestException).toBeTruthy();
        expect(e.response.status).toBe(404);
      } finally {
        expect(exception).toBeTruthy();
      }
      await rc.revoke();
    };
    await f('https');
    await f('wss');
  });
});
