import type AuthorizeRequest from "../../../../definitions/AuthorizeRequest";
import type AuthorizeParameters from "../../../../definitions/AuthorizeParameters";
import type {
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
    return `${this._parent.path()}/authorize`;
  }
  /**
   * Performs Authentication of the End-User by sending the User Agent to the Authorization Server's
   * Authorization Endpoint for Authentication and Authorization,
   * using request parameters defined by OAuth 2.0 [RFC-6749](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)
   * and additional parameters and parameter values defined by
   * [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint).
   *
   * This is the version that uses HTTP `GET` method.
   *
   * HTTP Method: get
   * Endpoint: /restapi/oauth/authorize
   * Rate Limit Group: Auth
   */
  public async get(
    queryParams?: AuthorizeParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.get<string>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Performs Authentication of the End-User by sending the User Agent to the Authorization Server's
   * Authorization Endpoint for Authentication and Authorization,
   * using request parameters defined by OAuth 2.0 [RFC-6749](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)
   * and additional parameters and parameter values defined by
   * [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint).
   *
   * This is the version that uses HTTP `POST` method.
   *
   * HTTP Method: post
   * Endpoint: /restapi/oauth/authorize
   * Rate Limit Group: Auth
   */
  public async post(
    authorizeRequest: AuthorizeRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      authorizeRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
