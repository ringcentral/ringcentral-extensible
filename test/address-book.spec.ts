import ReusableRestClient from "./reusable-rest-client";

describe("Address Book", () => {
  test("contacts", async () => {
    const rc = await ReusableRestClient.getInstance();
    const r = await rc.restapi().account().extension().addressBook().contact()
      .list();
    expect(r).toBeDefined();
    expect(r.records).toBeDefined();
    expect(r.records!.length).toBeGreaterThanOrEqual(0); // by default address book is empty
  });

  test("extensions", async () => {
    const rc = await ReusableRestClient.getInstance();
    const r = await rc
      .restapi()
      .account()
      .extension()
      // .list({email: 'tyler4long@gmail.com'}); // you can search user by email, and user id is also Glip id
      .list();
    expect(r).toBeDefined();
    expect(r.records).toBeDefined();
    expect(r.records!.length).toBeGreaterThan(0);
  });
});
