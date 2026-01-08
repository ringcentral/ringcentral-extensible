import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("Profile image", () => {
  test("download", async () => {
    const rc = await ReusableRestClient.getInstance();
    const buffer = await rc.restapi().account().extension().profileImage()
      .list();
    expect(buffer instanceof Uint8Array).toBe(true);
    fs.writeFileSync(path.join(__dirname, "temp.png"), buffer);
  });

  test("upload", async () => {
    const rc = await ReusableRestClient.getInstance();
    await rc
      .restapi()
      .account()
      .extension()
      .profileImage()
      .post({
        image: {
          filename: "rc.png",
          contentType: "image/png",
          content: fs.readFileSync("./test.png"),
        },
      });
  });

  test("download others", async () => {
    // const rc = new RingCentral({
    //   clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    //   clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    //   server: process.env.RINGCENTRAL_SERVER_URL!,
    // });
    // await rc.login({
    //   jwt: process.env.RINGCENTRAL_JWT_TOKEN!,
    // });
    // const rc2 = new RingCentral({
    //   clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    //   clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    //   server: process.env.RINGCENTRAL_SERVER_URL!,
    // });
    // await rc2.login({
    //   jwt: process.env.RINGCENTRAL_JWT_TOKEN2!,
    // });
    // const buffer = await rc
    //   .restapi()
    //   .account()
    //   .extension(rc2.token?.owner_id)
    //   .profileImage()
    //   .list();
    // expect(buffer.constructor.name).toBe('Buffer');
    // fs.writeFileSync(path.join(__dirname, 'temp.png'), buffer);
    // await rc.revoke();
  });
});
