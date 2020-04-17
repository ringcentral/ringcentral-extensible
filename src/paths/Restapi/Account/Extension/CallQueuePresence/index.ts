import ExtensionCallQueueUpdatePresenceList from '../../../../../definitions/ExtensionCallQueueUpdatePresenceList'
import ReadExtensionCallQueuePresenceParameters from '../../../../../definitions/ReadExtensionCallQueuePresenceParameters'
import ExtensionCallQueuePresenceList from '../../../../../definitions/ExtensionCallQueuePresenceList'
import Parent from '..'
import RestClient from '../../../../..'

class CallQueuePresence {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/call-queue-presence`
  }

  /**
   * Operation: Get Agent’s Call Queue Presence
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence
   */
  async get(queryParams?: ReadExtensionCallQueuePresenceParameters): Promise<ExtensionCallQueuePresenceList> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update Call Queue Presence
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queue-presence
   */
  async put(extensionCallQueueUpdatePresenceList: ExtensionCallQueueUpdatePresenceList): Promise<ExtensionCallQueuePresenceList> {
    return this.rc.put(this.path(), extensionCallQueueUpdatePresenceList)
  }
}

export default CallQueuePresence
