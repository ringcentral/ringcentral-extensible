import ExtensionCallerIdInfoRequest from "../../../../../definitions/ExtensionCallerIdInfoRequest.js";
import ExtensionCallerIdInfo from "../../../../../definitions/ExtensionCallerIdInfo.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/caller-id`;
  }
  /**
   * Returns information on an outbound caller ID of an extension.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCallerIDSettings
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.get<ExtensionCallerIdInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates outbound caller ID information of an extension.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-id
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditCallerIDSettings
   */
  public async put(
    extensionCallerIdInfoRequest: ExtensionCallerIdInfoRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ExtensionCallerIdInfo> {
    const r = await this.rc.put<ExtensionCallerIdInfo>(
      this.path(),
      extensionCallerIdInfoRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
