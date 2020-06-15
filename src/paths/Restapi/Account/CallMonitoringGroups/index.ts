import BulkAssign from './BulkAssign';
import Members from './Members';
import {RestRequestConfig} from '../../../../Rest';
import {
  CallMonitoringGroup,
  CreateCallMonitoringGroupRequest,
  CallMonitoringGroups,
  ListCallMonitoringGroupsParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  groupId: string | null;
  parent: Parent;

  constructor(parent: Parent, groupId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.groupId = groupId;
  }

  path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/call-monitoring-groups/${this.groupId}`;
    }

    return `${this.parent.path()}/call-monitoring-groups`;
  }

  /**
   * Operation: Create Call Monitoring Group
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async post(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest,
    config?: RestRequestConfig
  ): Promise<CallMonitoringGroup> {
    const r = await this.rc.post<CallMonitoringGroup>(
      this.path(false),
      createCallMonitoringGroupRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Call Monitoring Groups List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async get(
    queryParams?: ListCallMonitoringGroupsParameters,
    config?: RestRequestConfig
  ): Promise<CallMonitoringGroups> {
    const r = await this.rc.get<CallMonitoringGroups>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Updates Call Monitoring Group
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async put(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest,
    config?: RestRequestConfig
  ): Promise<CallMonitoringGroup> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }

    const r = await this.rc.put<CallMonitoringGroup>(
      this.path(),
      createCallMonitoringGroupRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Call Monitoring Group
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  members(): Members {
    return new Members(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}

export default Index;
