import UserCallQueues from '../../../../../definitions/UserCallQueues'
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
    return `${this.parent.path()}/call-queues`
  }

  /**
   * Operation: Update User Call Queues
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues
   */
  async put(userCallQueues: UserCallQueues): Promise<UserCallQueues> {
    return this.rc.put(this.path(), userCallQueues)
  }
}

export default Index
