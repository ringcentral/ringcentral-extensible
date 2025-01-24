import type UserVideoConfiguration from "../../../../../definitions/UserVideoConfiguration";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/video-configuration`;
  }
  /**
   * Returns information about video configuration settings of the current user.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: Meetings
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserVideoConfiguration> {
    const r = await this.rc.get<UserVideoConfiguration>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
