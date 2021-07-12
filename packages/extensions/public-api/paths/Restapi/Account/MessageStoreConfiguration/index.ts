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
   * Returns message store settings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-configuration
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: AccountAdministration
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<MessageStoreConfiguration> {
    const r = await this.rc.get<MessageStoreConfiguration>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates message store settings.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-configuration
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: AccountAdministration
   */
  async put(
    messageStoreConfiguration: MessageStoreConfiguration,
    restRequestConfig?: RestRequestConfig
  ): Promise<MessageStoreConfiguration> {
    const r = await this.rc.put<MessageStoreConfiguration>(
      this.path(),
      messageStoreConfiguration,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
