import { RestRequestConfig } from '../../../../Rest';
import {
  SyncAccountCallLogParameters,
  AccountCallLogSyncResponse,
} from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    queryParams?: SyncAccountCallLogParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountCallLogSyncResponse> {
    const r = await this.rc.get<AccountCallLogSyncResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
