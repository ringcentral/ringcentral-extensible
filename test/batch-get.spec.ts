import ReusableRestClient from "./reusable-rest-client";

describe("batch get", () => {
  test("get extension's presence info", async () => {
    const rc = await ReusableRestClient.getInstance();
    const extensions = await rc.restapi().account().extension().list({
      perPage: 30,
    }); // batch requests limited to 30 max
    expect(extensions.records?.length).toBeGreaterThan(1);
    const r = await rc.get(
      `/restapi/v1.0/account/~/extension/${
        extensions.records?.map((record) => record.id).join(",")
      }/presence`,
    );
    expect(r).not.toBeNull();
    expect(r.data).not.toBeNull();
    expect(r.data).toContain("--Boundary");
  });
});
