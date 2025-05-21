import JWKeySet from "../../../../definitions/JWKeySet.js";
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
    return `${this._parent.path()}/jwks`;
  }
  /**
   * Returns the signing key(s) in JWK Set format. Client use it to validate signatures of any JWT
   * (e.g. OpenID Connect ID Token) issued by the Authorization Server
   * (see [RFC-7517](https://www.rfc-editor.org/rfc/rfc7517.html#section-5))
   *
   * HTTP Method: get
   * Endpoint: /restapi/oauth/jwks
   * Rate Limit Group: NoThrottling
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<JWKeySet> {
    const r = await this.rc.get<JWKeySet>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
