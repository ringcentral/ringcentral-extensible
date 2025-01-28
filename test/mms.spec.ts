import type CreateMMSMessage from "@rc-ex/core/definitions/CreateMMSMessage";
import type Attachment from "@rc-ex/core/definitions/Attachment";
import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("mms", () => {
  test("send mms", async () => {
    const rc = await ReusableRestClient.getInstance();
    const createMMSMessage: CreateMMSMessage = {};
    createMMSMessage.from = { phoneNumber: process.env.RINGCENTRAL_SENDER! };
    createMMSMessage.to = [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }];
    const attachment: Attachment = {};
    attachment.filename = "text.png";
    attachment.content = fs.createReadStream(path.join(__dirname, "test.png"));
    attachment.contentType = "image/png";
    createMMSMessage.attachments = [attachment];
    const messageInfo = await rc.restapi().account().extension().mms().post(
      createMMSMessage,
    );
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });
});
