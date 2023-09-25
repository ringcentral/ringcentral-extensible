import type AdaptiveCardShortInfo from '../../../../definitions/AdaptiveCardShortInfo';
import type AdaptiveCardRequest from '../../../../definitions/AdaptiveCardRequest';
import type AdaptiveCardInfo from '../../../../definitions/AdaptiveCardInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public cardId: string | null;

  public constructor(_parent: ParentInterface, cardId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.cardId = cardId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.cardId !== null) {
      return `${this._parent.path()}/adaptive-cards/${this.cardId}`;
    }
    return `${this._parent.path()}/adaptive-cards`;
  }

  /**
   * Returns adaptive card(s) with given id(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<AdaptiveCardInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.get<AdaptiveCardInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates an adaptive card.
   * HTTP Method: put
   * Endpoint: /team-messaging/v1/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async put(
    adaptiveCardRequest: AdaptiveCardRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AdaptiveCardShortInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.put<AdaptiveCardShortInfo>(this.path(), adaptiveCardRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes an adaptive card by ID.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
