import WS from 'isomorphic-ws';

import {WsgMeta, WsgEvent} from './types';
import {TimeoutException} from './exceptions';

class Utils {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static splitWsgData(wsgData: string): [WsgMeta, any] {
    if (wsgData.includes(',--Boundary')) {
      const index = wsgData.indexOf(',--Boundary');
      return [
        JSON.parse(wsgData.substring(1, index)),
        wsgData.substring(index + 1, wsgData.length - 1),
      ];
    } else {
      return JSON.parse(wsgData);
    }
  }

  static debugWebSocket(ws: WS) {
    const send = ws.send.bind(ws);
    ws.send = (str: string) => {
      send(str);
      console.debug(
        `*** WebSocket outgoing message: ***
${JSON.stringify(JSON.parse(str), null, 2)}
******`
      );
    };
    ws.addEventListener('message', (event: WsgEvent) => {
      console.debug(
        `*** WebSocket incoming message: ***
${JSON.stringify(JSON.parse(event.data), null, 2)}
******`
      );
    });
    ws.addEventListener('open', event => {
      console.debug('WebSocket open event:', event);
    });
    ws.addEventListener('error', event => {
      console.debug('WebSocket error event:', event);
    });
    ws.addEventListener('close', event => {
      console.debug('WebSocket close event:', event);
    });
  }

  static waitForWebSocketMessage(
    ws: WS,
    matchCondition: (meta: WsgMeta) => boolean,
    timeout = 60000
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Promise<[WsgMeta, any, WsgEvent]>((resolve, reject) => {
      const timeoutHandle = setTimeout(() => {
        ws.removeEventListener('message', handler);
        reject(new TimeoutException());
        return;
      }, timeout);
      const handler = (event: WsgEvent) => {
        const [meta, body] = Utils.splitWsgData(event.data);
        if (matchCondition(meta)) {
          ws.removeEventListener('message', handler);
          resolve([meta, body, event]);
          clearTimeout(timeoutHandle);
          return;
        }
      };
      ws.addEventListener('message', handler);
    });
  }
}

export default Utils;
