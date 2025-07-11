import RingCentral from "@rc-ex/core";
import AuthorizeUriExtension from "@rc-ex/authorize-uri";
import { describe, expect, test } from "vitest";

describe("Authorize URI Extension", () => {
  test("default", async () => {
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    const authorizeUriExtension = new AuthorizeUriExtension();
    await rc.installExtension(authorizeUriExtension);
    const authorizeUri = await authorizeUriExtension.buildUri({
      state: "hello",
      redirect_uri: "https://example.com",
    });
    expect(authorizeUri).toBeDefined();
    expect(authorizeUri.indexOf("state=hello")).not.toBe(-1);
    expect(authorizeUri.startsWith(rc.rest.server)).toBeTruthy();
    await authorizeUriExtension.revoke();
  });
});
