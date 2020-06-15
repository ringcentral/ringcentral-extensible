import {RestRequestConfig} from '../../../../../Rest';
import {
  CallMonitoringGroupMemberList,
  ListCallMonitoringGroupMembersParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

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
   * Operation: Get Call Monitoring Group Member List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members
   */
  async get(
    queryParams?: ListCallMonitoringGroupMembersParameters,
    config?: RestRequestConfig
  ): Promise<CallMonitoringGroupMemberList> {
    const r = await this.rc.get<CallMonitoringGroupMemberList>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
