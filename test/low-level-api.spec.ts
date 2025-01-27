import Utils from "@rc-ex/core/src/Utils";
import type FaxResponse from "@rc-ex/core/src/definitions/FaxResponse";
import type GetSMSMessageInfoResponse from "@rc-ex/core/src/definitions/GetSMSMessageInfoResponse";
import fs from "fs";
import path from "path";

import ReusableRestClient from "./reusable-rest-client";

describe("low level API", () => {
  test("sms", async () => {
    const rc = await ReusableRestClient.getInstance();
    const r = await rc.post<GetSMSMessageInfoResponse>(
      "/restapi/v1.0/account/~/extension/~/sms",
      {
        from: {
          phoneNumber: process.env.RINGCENTRAL_SENDER!,
        },
        to: [
          {
            phoneNumber: process.env.RINGCENTRAL_RECEIVER,
          },
        ],
        text: "hello world",
      },
    );
    const messageInfo = r.data;
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });
  test("fax", async () => {
    const rc = await ReusableRestClient.getInstance();
    const requestBody = {
      to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }],
      attachments: [
        {
          filename: "test.txt",
          content: "hello world",
          contentType: "text/plain",
        },
        {
          filename: "test.png",
          content: fs.createReadStream(path.join(__dirname, "test.png")),
          contentType: "image/png",
        },
      ],
    };
    const formData = await Utils.getFormData(requestBody);
    const r = await rc.post<FaxResponse>(
      "/restapi/v1.0/account/~/extension/~/fax",
      formData,
    );
    const messageInfo = r.data;
    expect(messageInfo).not.toBeUndefined();
    expect(messageInfo.id).not.toBeUndefined();
  });
});
