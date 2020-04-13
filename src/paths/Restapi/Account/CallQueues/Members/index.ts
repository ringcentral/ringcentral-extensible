import CallQueueMembers from '../../../../../definitions/CallQueueMembers'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/members`
  }

  /**
   * Operation: Get Call Queue Members
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}/members
   */
  async get(ListCallQueueMembersParameters queryParams = null): Promise<CallQueueMembers> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
