import ExtensionCallQueueUpdatePresenceList from '../../../../../definitions/ExtensionCallQueueUpdatePresenceList'
import ExtensionCallQueuePresenceList from '../../../../../definitions/ExtensionCallQueuePresenceList'
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
    return `${this.parent.path()}/call-queue-presence`
  }

  /**
   * Operation: Get Agent’s Call Queue Presence
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence
   */
  async get(ReadExtensionCallQueuePresenceParameters queryParams = null): Promise<ExtensionCallQueuePresenceList> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Call Queue Presence
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence
   */
  async put(ExtensionCallQueueUpdatePresenceList extensionCallQueueUpdatePresenceList): Promise<ExtensionCallQueuePresenceList> {
    return this.rc.put(this.path(), extensionCallQueueUpdatePresenceList)
  }
}

export default Index
