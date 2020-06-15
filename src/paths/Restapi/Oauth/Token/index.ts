import {RestRequestConfig} from '../../../../Rest';
import {TokenInfo, GetTokenRequest} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Operation: Get Token
   * Rate Limit Group: Auth
   * Http post /restapi/oauth/token
   */
  async post(
    getTokenRequest: GetTokenRequest,
    config?: RestRequestConfig
  ): Promise<TokenInfo> {
    const r = await this.rc.post<TokenInfo>(
      this.path(),
      getTokenRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
