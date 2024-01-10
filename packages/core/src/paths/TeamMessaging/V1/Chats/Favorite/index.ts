import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/favorite`;
  }
  /**
   * Adds the specified chat to the users's list of favorite chats.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/chats/{chatId}/favorite
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
