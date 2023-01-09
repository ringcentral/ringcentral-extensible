import AdaptiveCardShortInfo from '../../../../definitions/AdaptiveCardShortInfo';
import AdaptiveCardRequest from '../../../../definitions/AdaptiveCardRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/adaptive-cards`;
  }

  /**
   * Creates a new adaptive card in the chat specified in path.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/chats/{chatId}/adaptive-cards
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(adaptiveCardRequest: AdaptiveCardRequest, restRequestConfig?: RestRequestConfig): Promise<AdaptiveCardShortInfo> {
    const r = await this.rc.post<AdaptiveCardShortInfo>(this.path(), adaptiveCardRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
