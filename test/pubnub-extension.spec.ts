import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';
import waitFor from 'wait-for-async';
import { createRingCentral } from './utils';

describe('PubNub extension', () => {
  test('default', async () => {
    const rc = await createRingCentral();
    const pubNubExtension = new PubNubExtension();
    await rc.installExtension(pubNubExtension);
    let eventCount = 0;
    await pubNubExtension.subscribe(
      ['/restapi/v1.0/account/~/extension/~/message-store'],
      (body: any) => {
        expect(body).not.toBeNull();
        expect(body).toBeDefined();
        eventCount += 1;
      },
    );
    // Rest API call over WebSocket
    await rc
      .restapi()
      .account()
      .extension()
      .companyPager()
      .post({
        from: { extensionNumber: '101' },
        to: [{ extensionNumber: '101' }], // send pager to oneself
        text: 'Hello world',
      });
    const successful = await waitFor({
      condition: () => eventCount > 0,
      interval: 1000,
      times: 30,
    });
    await rc.revoke();
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
  });
});
