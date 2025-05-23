import CallLogSyncResponse from "../../../../definitions/CallLogSyncResponse.js";
import SyncAccountCallLogParameters from "../../../../definitions/SyncAccountCallLogParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/call-log-sync`;
  }
  /**
   * Synchronizes company call log records.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  public async get(
    queryParams?: SyncAccountCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallLogSyncResponse> {
    const r = await this.rc.get<CallLogSyncResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
