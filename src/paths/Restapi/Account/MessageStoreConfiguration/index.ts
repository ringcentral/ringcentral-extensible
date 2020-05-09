import Parent from '..';
import RingCentral from '../../../..';

class MessageStoreConfiguration {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/message-store-configuration`;
  }

  /**
   * Operation: Get Message Store Configuration
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/message-store-configuration
   */
  async get(): Promise<MessageStoreConfiguration> {
    const r = await this.rc.get<MessageStoreConfiguration>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Message Store Configuration
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/message-store-configuration
   */
  async put(
    messageStoreConfiguration: MessageStoreConfiguration
  ): Promise<MessageStoreConfiguration> {
    const r = await this.rc.put<MessageStoreConfiguration>(
      this.path(),
      messageStoreConfiguration
    );
    return r.data;
  }
}

export default MessageStoreConfiguration;
