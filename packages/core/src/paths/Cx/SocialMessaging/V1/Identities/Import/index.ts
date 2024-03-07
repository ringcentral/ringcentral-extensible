import type ImportIdentityRequest from '../../../../../../definitions/ImportIdentityRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/import`;
  }
  /**
   * Import an identity from given identifier.
   *
   * Available only for Email channels.
   *
   * HTTP Method: post
   * Endpoint: /cx/social-messaging/v1/identities/import
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async post(
    importIdentityRequest: ImportIdentityRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), importIdentityRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
