import MessageStoreConfiguration from '../../../../definitions/MessageStoreConfiguration';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async get(restRequestConfig?: RestRequestConfig): Promise<MessageStoreConfiguration> {
    const r = await this.rc.get<MessageStoreConfiguration>(this.path(), undefined, restRequestConfig);
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
  async put(messageStoreConfiguration: MessageStoreConfiguration, restRequestConfig?: RestRequestConfig): Promise<MessageStoreConfiguration> {
    const r = await this.rc.put<MessageStoreConfiguration>(this.path(), messageStoreConfiguration, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
