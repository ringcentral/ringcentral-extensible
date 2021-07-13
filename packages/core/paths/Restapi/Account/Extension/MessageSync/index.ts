import {RestRequestConfig} from '../../../../../Rest';
import {
  SyncMessagesParameters,
  GetMessageSyncResponse,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    queryParams?: SyncMessagesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GetMessageSyncResponse> {
    const r = await this.rc.get<GetMessageSyncResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
