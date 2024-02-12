import type RevokeTokenParameters from '../../../../definitions/RevokeTokenParameters';
import type RevokeTokenRequest from '../../../../definitions/RevokeTokenRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

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
   * `token` parameter may be passed in query string or body and may represent access or refresh token.
   *
   * Depending on client application type
   * requests to this endpoint may require authentication with HTTP Basic scheme
   * using registered client ID and client secret as login and password, correspondingly.
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
    const r = await this.rc.post<string>(this.path(), revokeTokenRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
