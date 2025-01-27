import RingCentral from "@rc-ex/core";
import { describe, expect, test } from "vitest";

class ReusableRestClient {
  private static rc: RingCentral;
  public static getInstance = async (): Promise<RingCentral> => {
    if (!ReusableRestClient.rc) {
      ReusableRestClient.rc = new RingCentral({
        clientId: process.env.RINGCENTRAL_CLIENT_ID!,
        clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
        server: process.env.RINGCENTRAL_SERVER_URL!,
      });
      await ReusableRestClient.rc.authorize({
        jwt: process.env.RINGCENTRAL_JWT_TOKEN!,
      });
    } else {
      // create a new RestClient but reuse the token
      const token = ReusableRestClient.rc.token;
      ReusableRestClient.rc = new RingCentral({
        clientId: process.env.RINGCENTRAL_CLIENT_ID!,
        clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
        server: process.env.RINGCENTRAL_SERVER_URL!,
      });
      ReusableRestClient.rc.token = token;
    }
    return ReusableRestClient.rc;
  };
}

export default ReusableRestClient;
