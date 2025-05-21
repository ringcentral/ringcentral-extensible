import Export from "./Export/index.js";
import UpdateOptRecordList from "../../../../../../definitions/UpdateOptRecordList.js";
import OptRecordsModificationSummary from "../../../../../../definitions/OptRecordsModificationSummary.js";
import DeleteOptRecordList from "../../../../../../definitions/DeleteOptRecordList.js";
import OptRecordList from "../../../../../../definitions/OptRecordList.js";
import ListSmsOptRecordsParameters from "../../../../../../definitions/ListSmsOptRecordsParameters.js";
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
    return `${this._parent.path()}/opt-outs`;
  }
  /**
   * Returns a list of records with phone numbers that are opted out and/or opted-in for SMS
   * at the account level. The list can be filtered by `to`/`from` phone number query parameters.
   *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/opt-outs
   * Rate Limit Group: Light
   * App Permission: SMS
   */
  public async get(
    queryParams?: ListSmsOptRecordsParameters,
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
   * Deletes the opted out/in numbers.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/opt-outs
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
   * Adds or updates the opted out/in numbers.
   *
   * HTTP Method: patch
   * Endpoint: /restapi/v2/accounts/{accountId}/sms/opt-outs
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
