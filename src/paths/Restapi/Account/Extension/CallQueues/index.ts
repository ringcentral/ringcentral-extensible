import UserCallQueues from '../../../../../definitions/UserCallQueues'
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
    return `${this.parent.path()}/call-queues`
  }

  /**
   * Operation: Update User Call Queues
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues
   */
  async put(UserCallQueues userCallQueues): Promise<UserCallQueues> {
    return this.rc.put(this.path(), userCallQueues)
  }
}

export default Index
