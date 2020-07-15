import {RestRequestConfig} from '../../../../Rest';
import {RevokeTokenRequest} from '../../../../definitions';
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
    return `${this.parent.path()}/revoke`;
  }

  /**
   * Operation: Revoke Token
   * Rate Limit Group: Auth
   * Http post /restapi/oauth/revoke
   */
  async post(
    revokeTokenRequest: RevokeTokenRequest,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      revokeTokenRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
