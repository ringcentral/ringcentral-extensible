import WebSocketExtension from '@rc-ex/ws';
import waitFor from 'wait-for-async';
import { createRingCentral } from '../utils';

jest.setTimeout(999999999);

describe('WebSocket', () => {
  test('auto recover', async () => {
    const rc = await createRingCentral();
    const webSocketExtension = new WebSocketExtension({
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);

    let eventCount = 0;
    await webSocketExtension.subscribe(
      ['/restapi/v1.0/account/~/extension/~/message-store'],
      (event: any) => {
        expect(event).toBeDefined();
        eventCount += 1;
      },
    );

    webSocketExtension.ws.close();

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
      times: 60,
    });
    await rc.revoke();
    expect(successful).toBeTruthy();
  });
});
