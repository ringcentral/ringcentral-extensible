import BulkAssign from './BulkAssign'
import Members from './Members'
import Presence from './Presence'
import { ListCallQueuesParameters, CallQueueDetails, CallQueueUpdateDetails } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class CallQueues {
  rc: RestClient
  groupId: string
  parent: Parent

  constructor(parent: Parent, groupId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.groupId = groupId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.groupId) {
      return `${this.parent.path()}/call-queues/${this.groupId}`
    }

    return `${this.parent.path()}/call-queues`
  }

  /**
   * Operation: Get Call Queues
   * Http get /restapi/v1.0/account/{accountId}/call-queues
   */
  async list(queryParams?: ListCallQueuesParameters): Promise<CallQueues> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Call Queue
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}
   */
  async get(): Promise<CallQueueDetails> {
    if (!this.groupId) {
      throw new Error('groupId must not be undefined')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Call Queue
   * Http put /restapi/v1.0/account/{accountId}/call-queues/{groupId}
   */
  async put(callQueueUpdateDetails: CallQueueUpdateDetails): Promise<CallQueueDetails> {
    if (!this.groupId) {
      throw new Error('groupId must not be undefined')
    }

    return this.rc.put(this.path(), callQueueUpdateDetails)
  }

  presence(): Presence {
    return new Presence(this)
  }

  members(): Members {
    return new Members(this)
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this)
  }
}

export default CallQueues
