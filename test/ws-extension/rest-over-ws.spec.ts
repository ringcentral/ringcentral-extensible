import WebSocketExtension from "@rc-ex/ws";

import ReusableRestClient from "../reusable-rest-client";
// import path from 'path';
// import dotenv from 'dotenv-override-true';

// dotenv.config({path: path.join(__dirname, '..', '.env.lab')});

describe("WebSocket", () => {
  test("Rest API call via WebSocket", async () => {
    // if (process.env.IS_LAB_ENV !== 'true') {
    //   return;
    // }
    const rc = await ReusableRestClient.getInstance();
    const webSocketExtension = new WebSocketExtension({
      restOverWebSocket: true,
      // debugMode: true,
    });
    await rc.installExtension(webSocketExtension);
    const extInfo = await rc.restapi().account().extension().get();
    expect(extInfo).toBeDefined();
    expect(extInfo.id).toBeDefined();
    await webSocketExtension.revoke();
  });
});
