import CallQueueUpdateDetails from '../../../../definitions/CallQueueUpdateDetails'
import CallQueueDetails from '../../../../definitions/CallQueueDetails'
import ListCallQueuesParameters from '../../../../definitions/ListCallQueuesParameters'
import CallQueues from '../../../../definitions/CallQueues'
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
    if (this.groupId === undefined || this.groupId === null) {
      throw new Error("groupId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Call Queue
   * Http put /restapi/v1.0/account/{accountId}/call-queues/{groupId}
   */
  async put(callQueueUpdateDetails: CallQueueUpdateDetails): Promise<CallQueueDetails> {
    if (this.groupId === undefined || this.groupId === null) {
      throw new Error("groupId must not be undefined or null")
    }

    return this.rc.put(this.path(), callQueueUpdateDetails)
  }
}

export default Index
