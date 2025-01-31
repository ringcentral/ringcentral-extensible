import GetMessageSyncResponse from "../../../../../definitions/GetMessageSyncResponse.js";
import SyncMessagesParameters from "../../../../../definitions/SyncMessagesParameters.js";
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
    return `${this._parent.path()}/message-sync`;
  }
  /**
   * Synchronizes messages.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-sync
   * Rate Limit Group: Light
   * App Permission: ReadMessages
   * User Permission: ReadMessages
   */
  public async get(
    queryParams?: SyncMessagesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetMessageSyncResponse> {
    const r = await this.rc.get<GetMessageSyncResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
