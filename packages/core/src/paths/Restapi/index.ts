import NumberParser from "./NumberParser/index.js";
import Subscription from "./Subscription/index.js";
import ClientInfo from "./ClientInfo/index.js";
import Dictionary from "./Dictionary/index.js";
import Account from "./Account/index.js";
import Oauth from "./Oauth/index.js";
import V2 from "./V2/index.js";
import ApiVersionInfo from "../../definitions/ApiVersionInfo.js";
import ApiVersionsList from "../../definitions/ApiVersionsList.js";
import { RestRequestConfig, RingCentralInterface } from "../../types.js";

class Index {
  public rc: RingCentralInterface;
  public apiVersion: string | null;

  public constructor(
    rc: RingCentralInterface,
    apiVersion: string | null = "v1.0",
  ) {
    this.rc = rc;
    this.apiVersion = apiVersion;
  }
  public path(withParameter = true): string {
    if (withParameter && this.apiVersion !== null) {
      return `/restapi/${this.apiVersion}`;
    }
    return "/restapi";
  }
  /**
   * Returns current API version(s) and server info.
   * HTTP Method: get
   * Endpoint: /restapi
   * Rate Limit Group: NoThrottling
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<ApiVersionsList> {
    const r = await this.rc.get<ApiVersionsList>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns current API version info by apiVersion.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}
   * Rate Limit Group: NoThrottling
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<ApiVersionInfo> {
    if (this.apiVersion === null) {
      throw new Error("apiVersion must be specified.");
    }
    const r = await this.rc.get<ApiVersionInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public v2(): V2 {
    return new V2(this);
  }

  public oauth(): Oauth {
    return new Oauth(this);
  }

  public account(accountId: string | null = "~"): Account {
    return new Account(this, accountId);
  }

  public dictionary(): Dictionary {
    return new Dictionary(this);
  }

  public clientInfo(): ClientInfo {
    return new ClientInfo(this);
  }

  public subscription(subscriptionId: string | null = null): Subscription {
    return new Subscription(this, subscriptionId);
  }

  public numberParser(): NumberParser {
    return new NumberParser(this);
  }
}
export default Index;
