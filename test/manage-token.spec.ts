import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("manage token", () => {
  test("get and set token", async () => {
    const rc = await ReusableRestClient.getInstance();

    // get token
    const tokenInfo = rc.token;

    // optionally save the token somewhere and read it back

    // set token
    rc.token = tokenInfo;

    // if you only have the access token string
    // rc.token = {
    //   access_token: '...'
    // }

    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo).not.toBeUndefined();
    expect(extensionInfo.id).not.toBeUndefined();
  });
});
