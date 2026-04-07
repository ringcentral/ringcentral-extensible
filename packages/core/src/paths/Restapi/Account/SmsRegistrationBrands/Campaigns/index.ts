import SubmitPhoneNumbers from "./SubmitPhoneNumbers/index.js";
import type TcrCampaignRecord from "../../../../../definitions/TcrCampaignRecord.js";
import type CampaignListResponse from "../../../../../definitions/CampaignListResponse.js";
import type {
  RingCentralInterface,
  ParentInterface,
  RestRequestConfig,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public tcrCampaignId: string | null;

  public constructor(
    _parent: ParentInterface,
    tcrCampaignId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.tcrCampaignId = tcrCampaignId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.tcrCampaignId !== null) {
      return `${this._parent.path()}/campaigns/${this.tcrCampaignId}`;
    }
    return `${this._parent.path()}/campaigns`;
  }
  /**
   * Returns a list of TCR campaigns by the TCR brand ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sms-registration-brands/{tcrBrandId}/campaigns
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadSMSRegistration
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CampaignListResponse> {
    const r = await this.rc.get<CampaignListResponse>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the TCR campaign by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sms-registration-brands/{tcrBrandId}/campaigns/{tcrCampaignId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadSMSRegistration
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TcrCampaignRecord> {
    if (this.tcrCampaignId === null) {
      throw new Error("tcrCampaignId must be specified.");
    }
    const r = await this.rc.get<TcrCampaignRecord>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public submitPhoneNumbers(): SubmitPhoneNumbers {
    return new SubmitPhoneNumbers(this);
  }
}
export default Index;
