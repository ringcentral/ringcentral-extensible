import PubNubExtension from '@rc-ex/pubnub';
import waitFor from 'wait-for-async';
import ReusableRestClient from './reusable-rest-client';

describe('PubNub extension', () => {
  test('default', async () => {
    const rc = await ReusableRestClient.getInstance();
    const pubNubExtension = new PubNubExtension();
    await rc.installExtension(pubNubExtension);
    let eventCount = 0;
    await pubNubExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (body: any) => {
      expect(body).not.toBeNull();
      expect(body).toBeDefined();
      eventCount += 1;
    });
    // Rest API call over WebSocket
    await rc
      .restapi()
      .account()
      .extension()
      .companyPager()
      .post({
        from: { extensionId: rc.token!.owner_id! },
        to: [{ extensionId: rc.token!.owner_id! }], // send pager to oneself
        text: 'Hello world',
      });
    const successful = await waitFor({
      condition: () => eventCount > 0,
      interval: 1000,
      times: 30,
    });
    expect(successful).toBeTruthy();
    expect(eventCount).toBeGreaterThan(0);
    await pubNubExtension.revoke();
  });
});
