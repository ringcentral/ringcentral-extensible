import BulkAssign from './BulkAssign'
import Members from './Members'
import { CallMonitoringGroup, CreateCallMonitoringGroupRequest, ListCallMonitoringGroupsParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class CallMonitoringGroups {
  rc: RestClient
  groupId: (string | null)
  parent: Parent

  constructor (parent: Parent, groupId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.groupId = groupId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/call-monitoring-groups/${this.groupId}`
    }

    return `${this.parent.path()}/call-monitoring-groups`
  }

  /**
   * Operation: Create Call Monitoring Group
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async post (createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest): Promise<CallMonitoringGroup> {
    return this.rc.post(this.path(false), createCallMonitoringGroupRequest)
  }

  /**
   * Operation: Get Call Monitoring Groups List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async get (queryParams?: ListCallMonitoringGroupsParameters): Promise<CallMonitoringGroups> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Updates Call Monitoring Group
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async put (createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest): Promise<CallMonitoringGroup> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.')
    }

    return this.rc.put(this.path(), createCallMonitoringGroupRequest)
  }

  /**
   * Operation: Delete Call Monitoring Group
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async delete (): Promise<string> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.')
    }

    return this.rc.delete(this.path())
  }

  members (): Members {
    return new Members(this)
  }

  bulkAssign (): BulkAssign {
    return new BulkAssign(this)
  }
}

export default CallMonitoringGroups
