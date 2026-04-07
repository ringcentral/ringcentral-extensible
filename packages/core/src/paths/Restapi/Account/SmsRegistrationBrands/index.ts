import type BrandListResponse from "../../../../definitions/BrandListResponse.js";
import type TcrBrandRecord from "../../../../definitions/TcrBrandRecord.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";
import Campaigns from "./Campaigns/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public tcrBrandId: string | null;

  public constructor(
    _parent: ParentInterface,
    tcrBrandId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.tcrBrandId = tcrBrandId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.tcrBrandId !== null) {
      return `${this._parent.path()}/sms-registration-brands/${this.tcrBrandId}`;
    }
    return `${this._parent.path()}/sms-registration-brands`;
  }
  /**
   * Returns a list of all TCR brands.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sms-registration-brands
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<BrandListResponse> {
    const r = await this.rc.get<BrandListResponse>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the TCR brand by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sms-registration-brands/{tcrBrandId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadSMSRegistration
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TcrBrandRecord> {
    if (this.tcrBrandId === null) {
      throw new Error("tcrBrandId must be specified.");
    }
    const r = await this.rc.get<TcrBrandRecord>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public campaigns(tcrCampaignId: string | null = null): Campaigns {
    return new Campaigns(this, tcrCampaignId);
  }
}
export default Index;
