import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/anonymize`;
  }
  /**
   * Anonymizes an Identity.
   *
   * HTTP Method: post
   * Endpoint: /cx/social-messaging/v1/identities/{identityId}/anonymize
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
