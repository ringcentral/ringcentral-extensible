// import winston from 'winston';
import { describe, expect, test } from "vitest";

import ReusableRestClient from "./reusable-rest-client";

// const logger = winston.createLogger({
//   transports: [
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     }),
//   ],
// });
// RingCentral.config.logger = logger;

// RingCentral.config.logger = console;

describe("call log", () => {
  test("list call log", async () => {
    const rc = await ReusableRestClient.getInstance();
    const callLogs = await rc.restapi().account().extension().callLog().list({
      dateFrom: "2020-06-08T15:41:00.000Z",
      dateTo: "2020-06-08T16:12:00.000Z",
    });
    expect(callLogs).not.toBeUndefined();
    expect(callLogs.records).not.toBeUndefined();
  });

  test("call log sync", async () => {
    const rc = await ReusableRestClient.getInstance();
    const callLogs = await rc.restapi().account().extension().callLogSync().get(
      {
        syncType: "FSync",
        dateFrom: "2020-06-08T15:41:00.000Z",
        recordCount: 5,
      },
    );
    expect(callLogs).not.toBeUndefined();
    expect(callLogs.records).not.toBeUndefined();

    const callLogs2 = await rc // ISync is like pagination, not to fetch latest records
      .restapi()
      .account()
      .extension()
      .callLogSync()
      .get({
        syncType: "ISync",
        recordCount: 5,
        syncToken: callLogs.syncInfo!.syncToken,
      });
    expect(callLogs2).not.toBeUndefined();
    expect(callLogs2.records).not.toBeUndefined();
  });
});
