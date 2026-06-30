import type OptRecordList from "../../../../../../../definitions/OptRecordList.js";
import type SearchSmsConsentRecordsRequest from "../../../../../../../definitions/SearchSmsConsentRecordsRequest.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/search`;
  }
  /**
   * Returns the list of account-level SMS consent records according to the search criteria.
   *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/consents/search
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async post(
    searchSmsConsentRecordsRequest: SearchSmsConsentRecordsRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<OptRecordList> {
    const r = await this.rc.post<OptRecordList>(
      this.path(),
      searchSmsConsentRecordsRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
