import RingCentral from '@rc-ex/core';
import EventsExtension, {Events} from '@rc-ex/events';
import Utils from '@rc-ex/core/Utils';

import {testRingCentral} from './utils';

describe('Event Emitter Extension', () => {
  test('default', async () => {
    const testCase = async (rc: RingCentral) => {
      const eventsExtension = new EventsExtension();
      await rc.installExtension(eventsExtension);
      eventsExtension.eventEmitter.on(Events.requestSuccess, r => {
        console.log(Utils.formatTraffic(r));
      });
      eventsExtension.enabled = false; // remove this line to enable events
      await rc.restapi().account().extension().get();
      await rc.revoke();
    };
    await testRingCentral(testCase);
    await testRingCentral(testCase, 'wss');
  });
});
