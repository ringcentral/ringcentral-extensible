import type TokenInfo from '../../../../definitions/TokenInfo';
import type GetTokenRequest from '../../../../definitions/GetTokenRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/token`;
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
  public async post(getTokenRequest: GetTokenRequest, restRequestConfig?: RestRequestConfig): Promise<TokenInfo> {
    const r = await this.rc.post<TokenInfo>(this.path(), getTokenRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
