import CallLogExtractSyncResponse from "../../../../definitions/CallLogExtractSyncResponse.js";
import ExtractSyncAccountCallLogParameters from "../../../../definitions/ExtractSyncAccountCallLogParameters.js";
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
    return `${this._parent.path()}/call-log-extract-sync`;
  }
  /**
   * Extracts all company's call log records that were updated after the specified time.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log-extract-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  public async get(
    queryParams?: ExtractSyncAccountCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallLogExtractSyncResponse> {
    const r = await this.rc.get<CallLogExtractSyncResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
