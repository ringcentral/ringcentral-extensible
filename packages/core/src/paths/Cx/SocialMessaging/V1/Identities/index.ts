import type ListSocialMessagingIdentitiesParameters from '../../../../../definitions/ListSocialMessagingIdentitiesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public identityId: string | null;

  public constructor(_parent: ParentInterface, identityId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.identityId = identityId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.identityId !== null) {
      return `${this._parent.path()}/identities/${this.identityId}`;
    }
    return `${this._parent.path()}/identities`;
  }
  /**
   * Returns a list of identities filtered by creation date. The default order is descending.
   *
   * The account context of this request is determined by the RC Account ID associated with
   * the access token provided in the Authorization header.
   *
   * The query parameters provided will be considered an AND operation to filter the list.
   *
   * A query parameter which is not specified or provided with the null value will be ignored.
   *
   * HTTP Method: get
   * Endpoint: /cx/social-messaging/v1/identities
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async list(
    queryParams?: ListSocialMessagingIdentitiesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.get<string>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns an identity by ID specified in path.
   * HTTP Method: get
   * Endpoint: /cx/social-messaging/v1/identities/{identityId}
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.identityId === null) {
      throw new Error('identityId must be specified.');
    }
    const r = await this.rc.get<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
