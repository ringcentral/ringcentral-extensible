import ListCallMonitoringGroupMembersParameters from '../../../../../definitions/ListCallMonitoringGroupMembersParameters'
import CallMonitoringGroupMemberList from '../../../../../definitions/CallMonitoringGroupMemberList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
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

export default Index
