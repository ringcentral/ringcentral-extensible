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
   * Revokes access/refresh token. Requests to this endpoint must be authenticated with HTTP Basic scheme using the application key and application secret as login and password, correspondingly.
   * HTTP Method: post
   * Endpoint: /restapi/oauth/revoke
   * Rate Limit Group: Auth
   */
  async post(
    revokeTokenRequest: RevokeTokenRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      revokeTokenRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
