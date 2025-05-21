import AccountRegionalSettingRequest from "../../../../../definitions/AccountRegionalSettingRequest.js";
import RegionalSettings from "../../../../../definitions/RegionalSettings.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/regional-settings`;
  }
  /**
   * Returns information about particular account regional settings
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/regional-settings
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegionalSettings> {
    const r = await this.rc.get<RegionalSettings>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Change information about particular account regional settings
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/regional-settings
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async patch(
    accountRegionalSettingRequest: AccountRegionalSettingRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RegionalSettings> {
    const r = await this.rc.patch<RegionalSettings>(
      this.path(),
      accountRegionalSettingRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
