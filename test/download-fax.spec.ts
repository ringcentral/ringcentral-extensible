import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("fax", () => {
  test("download fax", async () => {
    const rc = await ReusableRestClient.getInstance();
    const faxMessages = await rc
      .restapi()
      .account()
      .extension()
      .messageStore()
      .list({
        messageType: ["Fax"],
        direction: ["Inbound"],
        dateFrom: "2010-04-15T17:18:00.000Z",
      });
    if (faxMessages.records?.length === 0) {
      return;
    }
    const r = await rc.get<Buffer>(
      faxMessages.records?.[0].attachments?.[0].uri ?? "",
      undefined,
      {
        responseType: "arraybuffer",
      },
    );
    fs.writeFileSync(path.join(__dirname, "temp.pdf"), r.data);
  });

  test("CDN URI", async () => {
    const rc = await ReusableRestClient.getInstance();
    const faxMessages = await rc
      .restapi()
      .account()
      .extension()
      .messageStore()
      .list({
        messageType: ["Fax"],
        direction: ["Inbound"],
        dateFrom: "2010-04-15T17:18:00.000Z",
      });
    if (faxMessages.records?.length === 0) {
      return;
    }
    expect(
      faxMessages.records?.[0].attachments?.[0].uri!.startsWith("https://"), // absolute CDN uri
    ).toBeTruthy();
  });
});
