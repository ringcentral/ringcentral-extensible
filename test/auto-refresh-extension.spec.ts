import AutoRefreshExtension from "@rc-ex/auto-refresh";
import waitFor from "wait-for-async";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("Auto Refresh Extension", () => {
  test("default", async () => {
    const rc = await ReusableRestClient.getInstance();
    const autoRefreshExtension = new AutoRefreshExtension({
      interval: 1000 * 2,
    }); // refresh every 2 seconds
    await rc.installExtension(autoRefreshExtension);
    let accessToken = rc.token?.access_token;
    autoRefreshExtension.start();
    await waitFor({ interval: 1000 * 3 }); // 3 seconds
    expect(rc.token?.access_token).not.toBe(accessToken);
    await autoRefreshExtension.stop();
    accessToken = rc.token?.access_token;
    await waitFor({ interval: 1000 * 3 }); // 3 seconds
    expect(rc.token?.access_token).toBe(accessToken);
    await autoRefreshExtension.revoke();
  });
});
