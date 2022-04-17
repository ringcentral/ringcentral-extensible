import { RestRequestConfig } from '../../../../Rest';
import { GetTokenRequest, TokenInfo } from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/token`;
  }

  /**
   * Returns access tokens for making API requests
   * HTTP Method: post
   * Endpoint: /restapi/oauth/token
   * Rate Limit Group: Auth
   */
  async post(
    getTokenRequest: GetTokenRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TokenInfo> {
    const r = await this.rc.post<TokenInfo>(
      this.path(),
      getTokenRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
