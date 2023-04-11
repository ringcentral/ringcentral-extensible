import TokenInfo from '../../../../definitions/TokenInfo';
import GetTokenRequest from '../../../../definitions/GetTokenRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/token`;
  }

  /**
   * Returns access (and potentially refresh) tokens for making API requests.
 *
 * Depending on client application type
 * requests to this endpoint may require authentication with HTTP Basic scheme
 * using registered client ID and client secret as login and password, correspondingly.
 *
   * HTTP Method: post
   * Endpoint: /restapi/oauth/token
   * Rate Limit Group: Auth
   */
  async post(getTokenRequest: GetTokenRequest, restRequestConfig?: RestRequestConfig): Promise<TokenInfo> {
    const r = await this.rc.post<TokenInfo>(this.path(), getTokenRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
