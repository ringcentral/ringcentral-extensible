import {RestRequestConfig} from '../../../../Rest';
import {MessageStoreConfiguration} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
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
  async get(config?: RestRequestConfig): Promise<MessageStoreConfiguration> {
    const r = await this.rc.get<MessageStoreConfiguration>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Message Store Configuration
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/message-store-configuration
   */
  async put(
    messageStoreConfiguration: MessageStoreConfiguration,
    config?: RestRequestConfig
  ): Promise<MessageStoreConfiguration> {
    const r = await this.rc.put<MessageStoreConfiguration>(
      this.path(),
      messageStoreConfiguration,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
