import BulkAssign from "./BulkAssign/index.js";
import Members from "./Members/index.js";
import CallMonitoringGroup from "../../../../definitions/CallMonitoringGroup.js";
import CreateCallMonitoringGroupRequest from "../../../../definitions/CreateCallMonitoringGroupRequest.js";
import CallMonitoringGroups from "../../../../definitions/CallMonitoringGroups.js";
import ListCallMonitoringGroupsParameters from "../../../../definitions/ListCallMonitoringGroupsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public groupId: string | null;

  public constructor(_parent: ParentInterface, groupId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.groupId = groupId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this._parent.path()}/call-monitoring-groups/${this.groupId}`;
    }
    return `${this._parent.path()}/call-monitoring-groups`;
  }
  /**
   * Returns a list of call monitoring groups filtered by an extension.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    queryParams?: ListCallMonitoringGroupsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallMonitoringGroups> {
    const r = await this.rc.get<CallMonitoringGroups>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new call monitoring group.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  public async post(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallMonitoringGroup> {
    const r = await this.rc.post<CallMonitoringGroup>(
      this.path(false),
      createCallMonitoringGroupRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates a call monitoring group name.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  public async put(
    createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallMonitoringGroup> {
    if (this.groupId === null) {
      throw new Error("groupId must be specified.");
    }
    const r = await this.rc.put<CallMonitoringGroup>(
      this.path(),
      createCallMonitoringGroupRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Removes information about a call monitoring group specified in path.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-monitoring-groups/{groupId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Groups
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.groupId === null) {
      throw new Error("groupId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public members(): Members {
    return new Members(this);
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
