import CallLogSyncResponse from '../../../../../definitions/CallLogSyncResponse';
import SyncUserCallLogParameters from '../../../../../definitions/SyncUserCallLogParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Synchronizes call log records
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async get(queryParams?: SyncUserCallLogParameters, restRequestConfig?: RestRequestConfig): Promise<CallLogSyncResponse> {
    const r = await this.rc.get<CallLogSyncResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
