/* eslint-env jest */
import RestException from '../packages/core/RestException';
import {testRingCentral} from './utils';
import RingCentral from '../packages/core';

jest.setTimeout(64000);

describe('Exceptions', () => {
  test('400', async () => {
    const testCase = async (rc: RingCentral) => {
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
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });

  test('404', async () => {
    const testCase = async (rc: RingCentral) => {
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
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
