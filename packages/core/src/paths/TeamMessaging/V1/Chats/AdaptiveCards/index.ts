import AdaptiveCardShortInfo from "../../../../../definitions/AdaptiveCardShortInfo";
import AdaptiveCardRequest from "../../../../../definitions/AdaptiveCardRequest";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/adaptive-cards`;
  }
  /**
   * Creates a new adaptive card in the chat specified in path.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/chats/{chatId}/adaptive-cards
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(
    adaptiveCardRequest: AdaptiveCardRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AdaptiveCardShortInfo> {
    const r = await this.rc.post<AdaptiveCardShortInfo>(
      this.path(),
      adaptiveCardRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
