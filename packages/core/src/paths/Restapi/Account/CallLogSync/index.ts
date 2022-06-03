import AccountCallLogSyncResponse from '../../../../definitions/AccountCallLogSyncResponse';
import SyncAccountCallLogParameters from '../../../../definitions/SyncAccountCallLogParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/call-log-sync`;
  }

  /**
   * Synchronizes company call log records.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-log-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async get(queryParams?: SyncAccountCallLogParameters, restRequestConfig?: RestRequestConfig): Promise<AccountCallLogSyncResponse> {
    const r = await this.rc.get<AccountCallLogSyncResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
