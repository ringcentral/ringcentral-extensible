import {CallMonitoringBulkAssign} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class BulkAssign {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Operation: Update Call Monitoring Group List
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign
   */
  async post(
    callMonitoringBulkAssign: CallMonitoringBulkAssign
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), callMonitoringBulkAssign);
    return r.data;
  }
}

export default BulkAssign;
