import WebSocketExtension from '@rc-ex/ws';
import waitFor from 'wait-for-async';
import ReusableRestClient from '../reusable-rest-client';

jest.setTimeout(999999999);

describe('WebSocket', () => {
  test('auto recover', async () => {
    const rc = await ReusableRestClient.getInstance();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);

    let eventCount = 0;
    await webSocketExtension.subscribe(['/restapi/v1.0/account/~/extension/~/message-store'], (event: any) => {
      expect(event).toBeDefined();
      eventCount += 1;
    });

    webSocketExtension.ws.close();

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
      times: 60,
    });
    expect(successful).toBeTruthy();
    await webSocketExtension.revoke();
  });
});
