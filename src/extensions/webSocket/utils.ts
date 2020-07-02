// eslint-disable-next-line node/no-unpublished-import
import WS from 'isomorphic-ws';

import {WsgMeta, WsgEvent} from './types';

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
  }
}

export default Utils;
