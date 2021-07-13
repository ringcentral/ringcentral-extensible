import {RestRequestConfig} from '../../../../../Rest';
import {CallMonitoringBulkAssign} from '../../../../../definitions';
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
    return `${this.parent.path()}/bulk-assign`;
  }
  /**
   * Updates call monitoring groups.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  async post(
    callMonitoringBulkAssign: CallMonitoringBulkAssign,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      callMonitoringBulkAssign,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
