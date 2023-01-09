import AdaptiveCardShortInfo from '../../../definitions/AdaptiveCardShortInfo';
import AdaptiveCardRequest from '../../../definitions/AdaptiveCardRequest';
import AdaptiveCardInfo from '../../../definitions/AdaptiveCardInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  cardId: string | null;

  constructor(parent: ParentInterface, cardId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.cardId = cardId;
  }

  path(withParameter = true): string {
    if (withParameter && this.cardId !== null) {
      return `${this.parent.path()}/adaptive-cards/${this.cardId}`;
    }
    return `${this.parent.path()}/adaptive-cards`;
  }

  /**
   * Returns adaptive card(s) with given id(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<AdaptiveCardInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.get<AdaptiveCardInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates an adaptive card.
   * HTTP Method: put
   * Endpoint: /team-messaging/{version}/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async put(adaptiveCardRequest: AdaptiveCardRequest, restRequestConfig?: RestRequestConfig): Promise<AdaptiveCardShortInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.put<AdaptiveCardShortInfo>(this.path(), adaptiveCardRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes an adaptive card by ID.
   * HTTP Method: delete
   * Endpoint: /team-messaging/{version}/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
