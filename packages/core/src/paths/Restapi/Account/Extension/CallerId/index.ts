import ExtensionCallerIdInfoRequest from '../../../../../definitions/ExtensionCallerIdInfoRequest';
import ExtensionCallerIdInfo from '../../../../../definitions/ExtensionCallerIdInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/caller-id`;
  }

  /**
   * Returns information on an outbound caller ID of an extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCallerIDSettings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.get<ExtensionCallerIdInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates outbound caller ID information of an extension.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditCallerIDSettings
   */
  async put(extensionCallerIdInfoRequest: ExtensionCallerIdInfoRequest, restRequestConfig?: RestRequestConfig): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.put<ExtensionCallerIdInfo>(this.path(), extensionCallerIdInfoRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
