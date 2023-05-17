import CallMonitoringBulkAssign from '../../../../../definitions/CallMonitoringBulkAssign';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/bulk-assign`;
  }

  /**
   * Updates a list of call monitoring groups.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  public async post(callMonitoringBulkAssign: CallMonitoringBulkAssign, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), callMonitoringBulkAssign, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
