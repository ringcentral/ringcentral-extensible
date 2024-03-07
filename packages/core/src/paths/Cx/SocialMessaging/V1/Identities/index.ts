import Deanonymize from './Deanonymize';
import Anonymize from './Anonymize';
import Import from './Import';
import type SocMsgListIdentitiesParameters from '../../../../../definitions/SocMsgListIdentitiesParameters';
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
   * List identities by creation date. The default order is descending.
   *
   * The account context of this request is determined by the RC Account Id associated with the access token provided
   * in the Authorization header.
   *
   * The query parameters provided shall be considered an AND operation to filter the list.
   *
   * A query parameter not specified or a query parameter provided with no value is treated as not required for
   * filtering the list.
   *
   * HTTP Method: get
   * Endpoint: /cx/social-messaging/v1/identities
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async list(
    queryParams?: SocMsgListIdentitiesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.get<string>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Renders an identity from given id.
   *
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

  public import(): Import {
    return new Import(this);
  }

  public anonymize(): Anonymize {
    return new Anonymize(this);
  }

  public deanonymize(): Deanonymize {
    return new Deanonymize(this);
  }
}
export default Index;
