import BulkAssign from './BulkAssign';
import Members from './Members';
import {RestRequestConfig} from '../../../../Rest';
import {
  ListCallMonitoringGroupsParameters,
  CallMonitoringGroups,
  CreateCallMonitoringGroupRequest,
  CallMonitoringGroup,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  groupId: string | null;

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
   * Returns call monitoring groups that can be filtered by some extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(
    queryParams?: ListCallMonitoringGroupsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallMonitoringGroups> {
    const r = await this.rc.get<CallMonitoringGroups>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new call monitoring group.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  async post(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallMonitoringGroup> {
    const r = await this.rc.post<CallMonitoringGroup>(
      this.path(false),
      createCallMonitoringGroupRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates call monitoring group name by ID.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  async put(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallMonitoringGroup> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }
    const r = await this.rc.put<CallMonitoringGroup>(
      this.path(),
      createCallMonitoringGroupRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Removes information about the given call monitoring group.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
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
