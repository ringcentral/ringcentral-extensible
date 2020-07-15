/* eslint-env jest */
import RingCentral from '../packages/core';
import {testRingCentral} from './utils';
import EventEmitterExtension, {Events} from '../packages/events';
import Utils from '../packages/core/Utils';

jest.setTimeout(64000);

describe('Event Emitter Extension', () => {
  test('default', async () => {
    const testCase = async (rc: RingCentral) => {
      const eventEmitterExtension = new EventEmitterExtension();
      await rc.installExtension(eventEmitterExtension);
      eventEmitterExtension.eventEmitter.on(Events.requestSuccess, r => {
        console.log(Utils.formatTraffic(r));
      });
      eventEmitterExtension.enabled = false; // remove this line to enable events
      await rc.restapi().account().extension().get();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
