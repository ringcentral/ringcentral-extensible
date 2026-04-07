import CustomUserGreetingInfo from "../../../../../../definitions/CustomUserGreetingInfo.js";
import {
  RingCentralInterface,
  ParentInterface,
  RestRequestConfig,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/hold-music`;
  }
  /**
   * Returns a custom hold music greeting for user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting/hold-music
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomUserGreetingInfo> {
    const r = await this.rc.get<CustomUserGreetingInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
