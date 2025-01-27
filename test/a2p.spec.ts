import path from "path";
import dotenv from "dotenv-override-true";
import DebugExtension from "@rc-ex/debug";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

dotenv.config({ path: path.join(__dirname, ".env.a2p") });

describe("SMS", () => {
  test("send", async () => {
    if (process.env.IS_A2P_ENV !== "true") {
      return;
    }
    const rc = await ReusableRestClient.getInstance();
    const debugExtension = new DebugExtension();
    rc.installExtension(debugExtension);
    debugExtension.disable();
    const messageBatchResponse = await rc
      .restapi()
      .account()
      .a2pSms()
      .batches()
      .post({
        from: process.env.RINGCENTRAL_FROM!,
        text: "hello world",
        messages: [
          {
            to: [process.env.RINGCENTRAL_TO!],
            text: "hello world 2", // override 'hello world'
          },
        ],
      });
    expect(messageBatchResponse).not.toBeUndefined();
    await debugExtension.revoke();
  });
});
