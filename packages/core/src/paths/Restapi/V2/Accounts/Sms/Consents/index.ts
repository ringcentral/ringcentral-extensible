import type OptRecordsModificationSummary from "../../../../../../definitions/OptRecordsModificationSummary.js";
import type UpdateOptRecordList from "../../../../../../definitions/UpdateOptRecordList.js";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";
import Export from "./Export/index.js";
import History from "./History/index.js";
import Search from "./Search/index.js";

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

  public search(): Search {
    return new Search(this);
  }

  public history(): History {
    return new History(this);
  }
}
export default Index;
