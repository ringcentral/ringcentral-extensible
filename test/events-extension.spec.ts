import EventsExtension, { Events } from "@rc-ex/events";
import Utils from "@rc-ex/core/src/Utils";
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

describe("Event Emitter Extension", () => {
  test("default", async () => {
    const rc = await ReusableRestClient.getInstance();
    const eventsExtension = new EventsExtension();
    await rc.installExtension(eventsExtension);
    eventsExtension.eventEmitter.on(Events.requestSuccess, (r) => {
      console.log(Utils.formatTraffic(r));
    });
    eventsExtension.disable(); // remove this line to enable events
    await rc.restapi().account().extension().get();
    await eventsExtension.revoke();
  });
});
