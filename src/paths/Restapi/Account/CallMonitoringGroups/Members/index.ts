import {
  CallMonitoringGroupMemberList,
  ListCallMonitoringGroupMembersParameters,
} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class Members {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/members`;
  }

  /**
   * Operation: Get Call Monitoring Group Member List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members
   */
  async get(
    queryParams?: ListCallMonitoringGroupMembersParameters
  ): Promise<CallMonitoringGroupMemberList> {
    const r = await this.rc.get<CallMonitoringGroupMemberList>(
      this.path(),
      queryParams
    );
    return r.data;
  }
}

export default Members;
