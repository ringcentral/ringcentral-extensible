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
   * For confidential client application types
   * this endpoint requires client authentication using one of the supported
   * methods (`client_secret_basic`, `client_secret_jwt` or `private_key_jwt`)
   *
   * For non-confidential client application types
   * the client identifier must be provided via `client_id` request attribute.
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
