import GetMessageSyncResponse from '../../../../../definitions/GetMessageSyncResponse';
import SyncMessagesParameters from '../../../../../definitions/SyncMessagesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
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
  public async get(queryParams?: SyncMessagesParameters, restRequestConfig?: RestRequestConfig): Promise<GetMessageSyncResponse> {
    const r = await this.rc.get<GetMessageSyncResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
