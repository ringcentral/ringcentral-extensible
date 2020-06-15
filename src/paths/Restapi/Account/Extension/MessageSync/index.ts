import {RestRequestConfig} from '../../../../../Rest';
import {
  GetMessageSyncResponse,
  SyncMessagesParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Operation: Sync Messages
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync
   */
  async get(
    queryParams?: SyncMessagesParameters,
    config?: RestRequestConfig
  ): Promise<GetMessageSyncResponse> {
    const r = await this.rc.get<GetMessageSyncResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
