import {RestRequestConfig} from '../../../../../Rest';
import {
  SyncUserCallLogParameters,
  CallLogSync,
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
    return `${this.parent.path()}/call-log-sync`;
  }
  /**
   * Synchronizes call log records.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-log-sync
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  async get(
    queryParams?: SyncUserCallLogParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallLogSync> {
    const r = await this.rc.get<CallLogSync>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
