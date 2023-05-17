import RevokeTokenRequest from '../../../../definitions/RevokeTokenRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/revoke`;
  }

  /**
   * Revokes previously issued access and refresh token.
 *
 * Depending on client application type
 * requests to this endpoint may require authentication with HTTP Basic scheme
 * using registered client ID and client secret as login and password, correspondingly.
 *
   * HTTP Method: post
   * Endpoint: /restapi/oauth/revoke
   * Rate Limit Group: Auth
   */
  public async post(revokeTokenRequest: RevokeTokenRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), revokeTokenRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
