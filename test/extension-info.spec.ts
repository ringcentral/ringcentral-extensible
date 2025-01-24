import ReusableRestClient from "./reusable-rest-client";

describe("HTTP GET", () => {
  test("get extension info", async () => {
    const rc = await ReusableRestClient.getInstance();
    const extensionInfo = await rc.restapi().account().extension().get();
    expect(extensionInfo).not.toBeUndefined();
    expect(extensionInfo.id).not.toBeUndefined();
  });
});
