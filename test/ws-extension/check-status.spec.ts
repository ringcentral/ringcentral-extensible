import RingCentral from '@rc-ex/core';
import RestException from '@rc-ex/core/lib/RestException';
import WebSocketExtension, {Events} from '@rc-ex/ws';
import waitFor from 'wait-for-async';
import WS from 'isomorphic-ws';

describe('WebSocket', () => {
  test('Rest API call via WebSocket', async () => {
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const webSocketExtension = new WebSocketExtension({
      // autoRecover: {enabled: false},
      debugMode: true,
    });
    await rc.installExtension(webSocketExtension);
    webSocketExtension.ws.onclose = () => {
      console.log('close', new Date());
      console.log(webSocketExtension.ws?.readyState);
    };
    console.log('ready', new Date());
    console.log(webSocketExtension.ws?.readyState);

    // const pingServer = async () => {
    //   try {
    //     await webSocketExtension.request('get', '/restapi/v1.0/status');
    //   } catch (e) {
    //     if (e instanceof RestException) {
    //       return; // Not a WS connection issue
    //     }
    //     // network issue or WS connection issue
    //     webSocketExtension.ws.close(); // Explicitly mark WS as closed
    //   }
    // };
    // const setupTimer = (ws: WS) => {
    //   let handle = setTimeout(pingServer, 10000);
    //   ws.on('message', () => {
    //     clearTimeout(handle);
    //     handle = setTimeout(pingServer, 10000);
    //   });
    // };
    // setupTimer(webSocketExtension.ws);
    // webSocketExtension.eventEmitter.on(Events.autoRecoverSuccess, ws => {
    //   setupTimer(ws);
    // });
    // webSocketExtension.eventEmitter.on(Events.autoRecoverFailed, ws => {
    //   setupTimer(ws);
    // });

    // await waitFor({interval: 9999999});

    await rc.revoke();
  });
});
