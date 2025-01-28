import type { MessageEvent } from "isomorphic-ws";
import type WS from "isomorphic-ws";

import type { WsgEvent, WsgMeta } from "./types";
import ClosedException from "./exceptions/ClosedException";
import TimeoutException from "./exceptions/TimeoutException";

class Utils {
  public static splitWsgData(wsgData: string): [WsgMeta, any] {
    if (wsgData.includes(",--Boundary")) {
      const index = wsgData.indexOf(",--Boundary");
      return [
        JSON.parse(wsgData.substring(1, index)),
        wsgData.substring(index + 1, wsgData.length - 1),
      ];
    }
    return JSON.parse(wsgData);
  }

  public static debugWebSocket(_ws: WS) {
    const ws = _ws;
    const send = ws.send.bind(ws);
    ws.send = async (str: string) => {
      await send(str);
      console.debug(
        `*** WebSocket outgoing message: ***
${JSON.stringify(JSON.parse(str), null, 2)}
******`,
      );
    };
    ws.addEventListener("message", (mEvent: MessageEvent) => {
      const event = mEvent as WsgEvent;
      console.debug(
        `*** WebSocket incoming message: ***
${JSON.stringify(JSON.parse(event.data), null, 2)}
******`,
      );
    });
    ws.addEventListener("open", (event) => {
      console.debug("WebSocket open event:", event);
    });
    ws.addEventListener("error", (event) => {
      console.debug("WebSocket error event:", event);
    });
    ws.addEventListener("close", (event) => {
      console.debug("WebSocket close event:", event);
    });
  }

  public static waitForWebSocketMessage(
    ws: WS,
    matchCondition: (meta: WsgMeta) => boolean,
    timeout = 60000,
  ) {
    return new Promise<[WsgMeta, any, WsgEvent]>((resolve, reject) => {
      const checkHandle = setInterval(() => {
        if (ws.readyState === ws.CLOSED) {
          clearInterval(checkHandle);
          reject(new ClosedException());
        }
      }, 1000);
      const timeoutHandle = setTimeout(() => {
        ws.removeEventListener("message", handler);
        clearInterval(checkHandle);
        reject(new TimeoutException());
      }, timeout);
      const handler = (mEvent: MessageEvent) => {
        const event = mEvent as WsgEvent;
        const [meta, body] = Utils.splitWsgData(event.data);
        if (matchCondition(meta)) {
          ws.removeEventListener("message", handler);
          clearInterval(checkHandle);
          clearTimeout(timeoutHandle);
          resolve([meta, body, event]);
        }
      };
      ws.addEventListener("message", handler);
    });
  }
}

export default Utils;
