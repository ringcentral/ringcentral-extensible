import { UserCallQueues } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class CallQueues {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/call-queues`
  }

  /**
   * Operation: Update User Call Queues
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues
   */
  async put (userCallQueues: UserCallQueues): Promise<UserCallQueues> {
    const r = await this.rc.put(this.path(), userCallQueues)
    return r.data
  }
}

export default CallQueues
