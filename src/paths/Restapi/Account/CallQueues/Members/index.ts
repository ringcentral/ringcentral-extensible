import ListCallQueueMembersParameters from '../../../../../definitions/ListCallQueueMembersParameters'
import CallQueueMembers from '../../../../../definitions/CallQueueMembers'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
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
   * Operation: Get Call Queue Members
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}/members
   */
  async get(queryParams?: ListCallQueueMembersParameters): Promise<CallQueueMembers> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
