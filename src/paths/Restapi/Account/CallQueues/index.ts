import BulkAssign from './BulkAssign'
import Members from './Members'
import { ListCallQueuesParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class CallQueues {
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
      return `${this.parent.path()}/call-queues/${this.groupId}`
    }

    return `${this.parent.path()}/call-queues`
  }

  /**
   * Operation: Get Call Queue List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/call-queues
   */
  async get (queryParams?: ListCallQueuesParameters): Promise<CallQueues> {
    return this.rc.get(this.path(false), queryParams)
  }

  members (): Members {
    return new Members(this)
  }

  bulkAssign (): BulkAssign {
    return new BulkAssign(this)
  }
}

export default CallQueues
