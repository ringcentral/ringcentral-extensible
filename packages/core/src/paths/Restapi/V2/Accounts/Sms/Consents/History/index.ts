import type ConsentHistoryRecordList from "../../../../../../../definitions/ConsentHistoryRecordList.js";
import type ListSmsConsentHistoryRecordsParameters from "../../../../../../../definitions/ListSmsConsentHistoryRecordsParameters.js";
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
    return `${this._parent.path()}/history`;
  }
  /**
   * Returns the history of SMS consent records for opted-out and/or opted-in phone numbers.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/consents/history
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async get(
    queryParams?: ListSmsConsentHistoryRecordsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ConsentHistoryRecordList> {
    const r = await this.rc.get<ConsentHistoryRecordList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
