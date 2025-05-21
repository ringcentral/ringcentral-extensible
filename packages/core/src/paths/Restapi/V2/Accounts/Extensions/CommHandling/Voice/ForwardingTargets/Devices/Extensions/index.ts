import CommExtensionListResource from "../../../../../../../../../../definitions/CommExtensionListResource.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/extensions`;
  }
  /**
   * Returns a list of extensions which use the specified device as a forwarding target.
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/comm-handling/voice/forwarding-targets/devices/{deviceId}/extensions
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CommExtensionListResource> {
    const r = await this.rc.get<CommExtensionListResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
