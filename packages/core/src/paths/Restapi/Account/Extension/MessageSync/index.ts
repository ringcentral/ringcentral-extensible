import GetMessageSyncResponse from '../../../../../definitions/GetMessageSyncResponse';
import SyncMessagesParameters from '../../../../../definitions/SyncMessagesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/message-sync`;
  }

  /**
   * Synchronizes messages.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/message-sync
   * Rate Limit Group: Light
   * App Permission: ReadMessages
   * User Permission: ReadMessages
   */
  async get(queryParams?: SyncMessagesParameters, restRequestConfig?: RestRequestConfig): Promise<GetMessageSyncResponse> {
    const r = await this.rc.get<GetMessageSyncResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
