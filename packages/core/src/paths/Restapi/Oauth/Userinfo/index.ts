import UserInfoResource from "../../../../definitions/UserInfoResource.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/userinfo`;
  }
  /**
   * OpenID Connect User Info endpoint, as defined by [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) specification.
   * It returns Claims about the authenticated End-User.
   *
   * This is the version that uses HTTP `GET` method.
   *
   * HTTP Method: get
   * Endpoint: /restapi/oauth/userinfo
   * Rate Limit Group: Auth
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserInfoResource> {
    const r = await this.rc.get<UserInfoResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
