import { RestRequestConfig } from '../../../../../Rest';
import {
  GlipAdaptiveCardRequest,
  GlipAdaptiveCardShortInfo,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/adaptive-cards`;
  }

  /**
   * Creates a new adaptive card in the chat specified in path.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/adaptive-cards
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(
    glipAdaptiveCardRequest: GlipAdaptiveCardRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GlipAdaptiveCardShortInfo> {
    const r = await this.rc.post<GlipAdaptiveCardShortInfo>(
      this.path(),
      glipAdaptiveCardRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
