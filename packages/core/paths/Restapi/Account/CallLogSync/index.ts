import {RestRequestConfig} from '../../../../Rest';
import {
  AccountCallLogSyncResponse,
  SyncAccountCallLogParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Operation: Sync Company Call Log
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/call-log-sync
   */
  async get(
    queryParams?: SyncAccountCallLogParameters,
    config?: RestRequestConfig
  ): Promise<AccountCallLogSyncResponse> {
    const r = await this.rc.get<AccountCallLogSyncResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
