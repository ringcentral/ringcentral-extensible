import Parent from '..'
import RestClient from '../../../..'

class MessageStoreConfiguration {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/message-store-configuration`
  }

  /**
   * Operation: Get Message Store Configuration
   * Http get /restapi/v1.0/account/{accountId}/message-store-configuration
   */
  async get (): Promise<MessageStoreConfiguration> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Message Store Configuration
   * Http put /restapi/v1.0/account/{accountId}/message-store-configuration
   */
  async put (messageStoreConfiguration: MessageStoreConfiguration): Promise<MessageStoreConfiguration> {
    return this.rc.put(this.path(), messageStoreConfiguration)
  }
}

export default MessageStoreConfiguration
