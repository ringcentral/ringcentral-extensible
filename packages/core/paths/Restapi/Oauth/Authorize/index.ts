import {RestRequestConfig} from '../../../../Rest';
import {AuthorizeRequest} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/authorize`;
  }
  /**
   * Returns a link to a login page location.
   * HTTP Method: post
   * Endpoint: /restapi/oauth/authorize
   */
  async post(
    authorizeRequest: AuthorizeRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      authorizeRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
