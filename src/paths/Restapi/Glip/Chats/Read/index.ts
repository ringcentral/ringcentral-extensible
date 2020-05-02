import Parent from '..';
import RestClient from '../../../../..';

class Read {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/read`;
  }

  /**
   * Operation: Mark Chat as Read
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/read
   */
  async post(): Promise<string> {
    const r = await this.rc.post<string>(this.path());
    return r.data;
  }
}

export default Read;
