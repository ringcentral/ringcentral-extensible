import RevokeTokenParameters from "../../../../definitions/RevokeTokenParameters";
import RevokeTokenRequest from "../../../../definitions/RevokeTokenRequest";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/revoke`;
  }
  /**
   * Revokes all active access/refresh tokens and invalidates the OAuth session basing on token provided.
   * The `token` parameter may be passed in query string or body and may represent access or refresh token.
   *
   * This endpoint is defined by [RFC-7009 "OAuth 2.0 Token Revocation"](https://datatracker.ietf.org/doc/html/rfc7009)
   *
   * For confidential client application types
   * this endpoint requires client authentication using one of the supported
   * methods (`client_secret_basic`, `client_secret_jwt` or `private_key_jwt`)
   *
   * HTTP Method: post
   * Endpoint: /restapi/oauth/revoke
   * Rate Limit Group: Auth
   */
  public async post(
    revokeTokenRequest: RevokeTokenRequest,
    queryParams?: RevokeTokenParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      revokeTokenRequest,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
