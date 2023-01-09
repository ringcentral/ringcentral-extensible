import AuthorizeRequest from '../../../../definitions/AuthorizeRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/authorize`;
  }

  /**
   * Performs OAuth 2.0 authorization (GET version)
   * HTTP Method: get
   * Endpoint: /restapi/oauth/authorize
   * Rate Limit Group: Auth
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Performs OAuth 2.0 authorization (POST version)
   * HTTP Method: post
   * Endpoint: /restapi/oauth/authorize
   * Rate Limit Group: Auth
   */
  async post(AuthorizeRequest: AuthorizeRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), AuthorizeRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
