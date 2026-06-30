import RcSdkExtension from "@rc-ex/rcsdk";
import { SDK } from "@ringcentral/sdk";
import { describe, expect, test } from "vitest";

describe("RingCentral extension", () => {
  test("sets connection close on SDK fetch in Node", async () => {
    const sdk = new SDK();
    const RequestCtor = sdk.externals().Request as typeof Request;
    const ResponseCtor = sdk.externals().Response as typeof Response;
    const connectionHeaders: Array<string | null> = [];
    sdk.externals().fetch = async (request: Request) => {
      connectionHeaders.push(request.headers.get("Connection"));
      return new ResponseCtor("{}");
    };

    const rcSdkExtension = new RcSdkExtension({ rcSdk: sdk });
    const wrappedFetch = sdk.externals().fetch;
    new RcSdkExtension({ rcSdk: sdk });

    expect(rcSdkExtension.options.rcSdk).toBe(sdk);
    expect(sdk.externals().fetch).toBe(wrappedFetch);
    await sdk.externals().fetch(new RequestCtor("https://example.com"));
    expect(connectionHeaders).toEqual(["close"]);
  });
});
