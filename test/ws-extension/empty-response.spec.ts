import WebSocketExtension from "@rc-ex/ws";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "../reusable-rest-client";

describe("WebSocket", () => {
  test("empty response", async () => {
    const rc = await ReusableRestClient.getInstance();
    const webSocketExtension = new WebSocketExtension({
      restOverWebSocket: true,
      // debugMode: true, // todo: test uncomment this
    });
    await rc.installExtension(webSocketExtension);
    // await rc.scim().health().get(); // todo: uncomment this
    await webSocketExtension.revoke();
  });
});
