import {RestRequestConfig} from '../../../../../Rest';
import {ExtensionCallerIdInfo} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.get<ExtensionCallerIdInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
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
  async put(
    extensionCallerIdInfo: ExtensionCallerIdInfo,
    restRequestConfig?: RestRequestConfig
  ): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.put<ExtensionCallerIdInfo>(
      this.path(),
      extensionCallerIdInfo,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
