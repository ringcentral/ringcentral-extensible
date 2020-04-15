import CallQueueUpdatePresence from '../../../../../definitions/CallQueueUpdatePresence'
import CallQueuePresence from '../../../../../definitions/CallQueuePresence'
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
    return `${this.parent.path()}/presence`
  }

  /**
   * Operation: Get Call Queue Presence
   * Http get /restapi/v1.0/account/{accountId}/call-queues/{groupId}/presence
   */
  async get(): Promise<CallQueuePresence> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Call Queue Presence
   * Http put /restapi/v1.0/account/{accountId}/call-queues/{groupId}/presence
   */
  async put(callQueueUpdatePresence: CallQueueUpdatePresence): Promise<CallQueuePresence> {
    return this.rc.put(this.path(), callQueueUpdatePresence)
  }
}

export default Index
