import CallLogSyncResponse from "../../../../../definitions/CallLogSyncResponse.js";
import SyncUserCallLogParameters from "../../../../../definitions/SyncUserCallLogParameters.js";
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
    return `${this._parent.path()}/call-log-sync`;
  }
  /**
   * Synchronizes the user call log records.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  public async get(
    queryParams?: SyncUserCallLogParameters,
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
