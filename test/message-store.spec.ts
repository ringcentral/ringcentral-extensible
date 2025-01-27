import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("message store", () => {
  test("every inbound fax should have from info", async () => {
    const rc = await ReusableRestClient.getInstance();
    const messageList = await rc
      .restapi()
      .account()
      .extension()
      .messageStore()
      .list({
        messageType: ["Fax"],
        direction: ["Inbound"],
        dateFrom: "2010-04-15T17:18:00.000Z",
      });
    if (messageList.records?.length === 0) {
      return;
    }
    expect(messageList.records?.length).toBeGreaterThan(0);
    expect(messageList.records?.filter((r) => "from" in r).length).toBe(
      messageList.records?.length,
    );
    const messageInfo = await rc
      .restapi()
      .account()
      .extension()
      .messageStore(messageList.records?.[0].id?.toString())
      .get();
    expect(messageInfo.from).toBeDefined();
  });
});
