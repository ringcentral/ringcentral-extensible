import type WebAppDevicesResponse from "../../../../../definitions/WebAppDevicesResponse.js";
import type {
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
    return `${this._parent.path()}/webapp-devices`;
  }
  /**
   * Returns the list of Web Phone (RC App) devices of the specified user extension,
   * and their current registration status (`Online`/`Offline`).
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/webapp-devices
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<WebAppDevicesResponse> {
    const r = await this.rc.get<WebAppDevicesResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
