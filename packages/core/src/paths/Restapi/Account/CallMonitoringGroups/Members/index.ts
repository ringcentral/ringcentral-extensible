import type CallMonitoringGroupMemberList from '../../../../../definitions/CallMonitoringGroupMemberList';
import type ListCallMonitoringGroupMembersParameters from '../../../../../definitions/ListCallMonitoringGroupMembersParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/members`;
  }
  /**
   * Returns a list of members for a call monitoring group specified in path.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/members
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    queryParams?: ListCallMonitoringGroupMembersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallMonitoringGroupMemberList> {
    const r = await this.rc.get<CallMonitoringGroupMemberList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
