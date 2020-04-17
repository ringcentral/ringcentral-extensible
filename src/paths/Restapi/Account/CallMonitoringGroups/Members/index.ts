import ListCallMonitoringGroupMembersParameters from '../../../../../definitions/ListCallMonitoringGroupMembersParameters'
import CallMonitoringGroupMemberList from '../../../../../definitions/CallMonitoringGroupMemberList'
import Parent from '..'
import RestClient from '../../../../..'

class Members {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/members`
  }

  /**
   * Operation: Get Call Monitoring Group Member List
   * Http get /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members
   */
  async get(queryParams?: ListCallMonitoringGroupMembersParameters): Promise<CallMonitoringGroupMemberList> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Members
