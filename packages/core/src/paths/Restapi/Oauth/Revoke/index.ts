import RevokeTokenRequest from '../../../../definitions/RevokeTokenRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/revoke`;
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
  async post(RevokeTokenRequest: RevokeTokenRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), RevokeTokenRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
