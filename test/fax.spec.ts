import type CreateFaxMessageRequest from "@rc-ex/core/src/definitions/CreateFaxMessageRequest";
import type Attachment from "@rc-ex/core/src/definitions/Attachment";
import type FaxResponse from "@rc-ex/core/src/definitions/FaxResponse";
import Utils from "@rc-ex/core/src/Utils";
import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("fax", () => {
  test("send fax", async () => {
    const rc = await ReusableRestClient.getInstance();
    const createFaxMessageRequest: CreateFaxMessageRequest = {};
    createFaxMessageRequest.to = [{
      phoneNumber: process.env.RINGCENTRAL_RECEIVER,
    }];
    const attachment1: Attachment = {};
    attachment1.filename = "text.txt";
    attachment1.content = "hello world";
    attachment1.contentType = "text/plain";
    const attachment2: Attachment = {};
    attachment2.filename = "text.png";
    attachment2.content = fs.createReadStream(path.join(__dirname, "test.png"));
    attachment2.contentType = "image/png";
    createFaxMessageRequest.attachments = [attachment1, attachment2];
    const messageInfo = await rc.restapi().account().extension().fax().post(
      createFaxMessageRequest,
    );
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });

  test("send fax - low level api", async () => {
    const rc = await ReusableRestClient.getInstance();
    const attachment1: Attachment = {};
    attachment1.filename = "text.txt";
    attachment1.content = "hello world";
    attachment1.contentType = "text/plain";
    const attachment2: Attachment = {};
    attachment2.filename = "text.png";
    attachment2.content = fs.createReadStream(path.join(__dirname, "test.png"));
    attachment2.contentType = "image/png";
    const formData = await Utils.getFormData({
      attachments: [attachment1, attachment2],
      to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER, name: "To Name" }],
    });
    const r = await rc.post<FaxResponse>(
      "/restapi/v1.0/account/~/extension/~/fax",
      formData,
    );
    const messageInfo = r.data;
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });
});
