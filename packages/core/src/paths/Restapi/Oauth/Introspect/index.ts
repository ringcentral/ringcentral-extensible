import type TokenIntrospectionResponse from '../../../../definitions/TokenIntrospectionResponse';
import type IntrospectTokenRequest from '../../../../definitions/IntrospectTokenRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/introspect`;
  }
  /**
   * Determines state and metadata for a given token (access token, refresh token
   * or authorization code)
   *
   * Depending on client application type
   * requests to this endpoint may require authentication with HTTP Basic scheme
   * using registered client ID and client secret as login and password, correspondingly.
   *
   * HTTP Method: post
   * Endpoint: /restapi/oauth/introspect
   * Rate Limit Group: Auth
   * App Permission: Interoperability
   */
  public async post(
    introspectTokenRequest: IntrospectTokenRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TokenIntrospectionResponse> {
    const r = await this.rc.post<TokenIntrospectionResponse>(
      this.path(),
      introspectTokenRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
