import {RestRequestConfig} from '../../../../Rest';
import {
  GlipAdaptiveCardInfo,
  GlipAdaptiveCardRequest,
  GlipAdaptiveCardShortInfo,
} from '../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  cardId: string | null;

  constructor(parent: Parent, cardId: string | null = null) {
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
   * Endpoint: /restapi/{apiVersion}/glip/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: Glip
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipAdaptiveCardInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.get<GlipAdaptiveCardInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates an adaptive card.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/glip/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async put(
    glipAdaptiveCardRequest: GlipAdaptiveCardRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipAdaptiveCardShortInfo> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.put<GlipAdaptiveCardShortInfo>(
      this.path(),
      glipAdaptiveCardRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes an adaptive card by ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/adaptive-cards/{cardId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.cardId === null) {
      throw new Error('cardId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
