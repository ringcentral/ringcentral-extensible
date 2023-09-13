import AuthorizeRequest from '../../../../definitions/AuthorizeRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

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
   * Performs OAuth 2.0 authorization (GET version)
   * HTTP Method: get
   * Endpoint: /restapi/oauth/authorize
   * Rate Limit Group: Auth
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Performs OAuth 2.0 authorization (POST version)
   * HTTP Method: post
   * Endpoint: /restapi/oauth/authorize
   * Rate Limit Group: Auth
   */
  public async post(authorizeRequest: AuthorizeRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), authorizeRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
