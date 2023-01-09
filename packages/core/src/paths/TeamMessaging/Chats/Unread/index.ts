import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/unread`;
  }

  /**
   * Sets the specified chat status to 'Unread' for the current user.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/chats/{chatId}/unread
   * Rate Limit Group: Medium
   * App Permission: TeamMessagingInternal
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
