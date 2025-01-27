import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("SMS", () => {
  test("send", async () => {
    const rc = await ReusableRestClient.getInstance();
    const messageInfo = await rc
      .restapi()
      .account()
      .extension()
      .sms()
      .post({
        from: {
          phoneNumber: process.env.RINGCENTRAL_SENDER!,
        },
        to: [
          {
            phoneNumber: process.env.RINGCENTRAL_RECEIVER,
          },
        ],
        text: "hello world",
      });
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });
});
