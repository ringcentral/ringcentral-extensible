import {RestRequestConfig} from '../../../../../Rest';
import {
  ListCallMonitoringGroupMembersParameters,
  CallMonitoringGroupMemberList,
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
  async get(
    queryParams?: ListCallMonitoringGroupMembersParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallMonitoringGroupMemberList> {
    const r = await this.rc.get<CallMonitoringGroupMemberList>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
