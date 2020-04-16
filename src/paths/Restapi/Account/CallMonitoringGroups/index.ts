import BulkAssign from './BulkAssign'
import Members from './Members'
import ListCallMonitoringGroupsParameters from '../../../../definitions/ListCallMonitoringGroupsParameters'
import CallMonitoringGroups from '../../../../definitions/CallMonitoringGroups'
import CreateCallMonitoringGroupRequest from '../../../../definitions/CreateCallMonitoringGroupRequest'
import CallMonitoringGroup from '../../../../definitions/CallMonitoringGroup'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  groupId: string
  parent: Parent

  constructor(parent: Parent, groupId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.groupId = groupId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/call-monitoring-groups/${this.groupId}`
    }

    return `${this.parent.path()}/call-monitoring-groups`
  }

  /**
   * Operation: Create Call Monitoring Group
   * Http post /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async post(createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest): Promise<CallMonitoringGroup> {
    return this.rc.post(this.path(false), createCallMonitoringGroupRequest)
  }

  /**
   * Operation: Get Call Monitoring Groups List
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups
   */
  async get(queryParams?: ListCallMonitoringGroupsParameters): Promise<CallMonitoringGroups> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Updates Call Monitoring Group
   * Http put /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async put(createCallMonitoringGroupRequest: CreateCallMonitoringGroupRequest): Promise<CallMonitoringGroup> {
    if (this.groupId === undefined || this.groupId === null) {
      throw new Error("groupId must not be undefined or null")
    }

    return this.rc.put(this.path(), createCallMonitoringGroupRequest)
  }

  /**
   * Operation: Delete Call Monitoring Group
   * Http delete /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}
   */
  async delete(): Promise<string> {
    if (this.groupId === undefined || this.groupId === null) {
      throw new Error("groupId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }

  members(): Members {
    return new Members(this)
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this)
  }
}

export default Index
