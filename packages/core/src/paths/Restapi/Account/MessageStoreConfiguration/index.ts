import MessageStoreConfiguration from '../../../../definitions/MessageStoreConfiguration';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/message-store-configuration`;
  }

  /**
   * Returns message store settings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/message-store-configuration
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: AccountAdministration
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<MessageStoreConfiguration> {
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
  public async put(messageStoreConfiguration: MessageStoreConfiguration, restRequestConfig?: RestRequestConfig): Promise<MessageStoreConfiguration> {
    const r = await this.rc.put<MessageStoreConfiguration>(this.path(), messageStoreConfiguration, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
