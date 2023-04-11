import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/unfavorite`;
  }

  /**
   * Removes the specified chat from the users's list of favorite chats.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/chats/{chatId}/unfavorite
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
