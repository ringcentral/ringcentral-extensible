import RevokeTokenParameters from "../../../../definitions/RevokeTokenParameters.js";
import RevokeTokenRequest from "../../../../definitions/RevokeTokenRequest.js";
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
   * methods:
   *   - `client_secret_basic` - client ID and client secret must be provided via `Authorization` header as described in
   *     [RFC-6749](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1).
   *   - `client_secret_jwt` / `private_key_jwt` -- `client_assertion` attribute should be used to pass a signed JWT as described in
   *     [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.2).
   *
   * For non-confidential client application types
   * the client identifier must be provided via `client_id` request attribute.
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
