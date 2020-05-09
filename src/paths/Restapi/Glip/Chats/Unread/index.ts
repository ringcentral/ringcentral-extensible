import Parent from '..';
import RingCentral from '../../../../..';

class Unread {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/unread`;
  }

  /**
   * Operation: Mark Chat as Unread
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/unread
   */
  async post(): Promise<string> {
    const r = await this.rc.post<string>(this.path());
    return r.data;
  }
}

export default Unread;
