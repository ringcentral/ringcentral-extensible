import Export from "./Export/index.js";
import UpdateOptRecordList from "../../../../../../definitions/UpdateOptRecordList.js";
import OptRecordsModificationSummary from "../../../../../../definitions/OptRecordsModificationSummary.js";
import DeleteOptRecordList from "../../../../../../definitions/DeleteOptRecordList.js";
import OptRecordList from "../../../../../../definitions/OptRecordList.js";
import ListSmsConsentRecordsParameters from "../../../../../../definitions/ListSmsConsentRecordsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/consents`;
  }
  /**
   * Returns a list of account-level SMS consent records for opted-out and/or opted-in phone numbers.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/consents
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async get(
    queryParams?: ListSmsConsentRecordsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<OptRecordList> {
    const r = await this.rc.get<OptRecordList>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes SMS consent records.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/consents
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async delete(
    deleteOptRecordList: DeleteOptRecordList,
    restRequestConfig?: RestRequestConfig,
  ): Promise<OptRecordsModificationSummary> {
    const r = await this.rc.delete<OptRecordsModificationSummary>(
      this.path(),
      deleteOptRecordList,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Adds or updates SMS consent records.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/consents
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async patch(
    updateOptRecordList: UpdateOptRecordList,
    restRequestConfig?: RestRequestConfig,
  ): Promise<OptRecordsModificationSummary> {
    const r = await this.rc.patch<OptRecordsModificationSummary>(
      this.path(),
      updateOptRecordList,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public export(): Export {
    return new Export(this);
  }
}
export default Index;
