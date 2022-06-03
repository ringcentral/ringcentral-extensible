import CallMonitoringGroupMemberList from '../../../../../definitions/CallMonitoringGroupMemberList';
import ListCallMonitoringGroupMembersParameters from '../../../../../definitions/ListCallMonitoringGroupMembersParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/members`;
  }

  /**
   * Returns call monitoring group members.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}/members
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(queryParams?: ListCallMonitoringGroupMembersParameters, restRequestConfig?: RestRequestConfig): Promise<CallMonitoringGroupMemberList> {
    const r = await this.rc.get<CallMonitoringGroupMemberList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
