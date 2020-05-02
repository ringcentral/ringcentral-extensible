import Parent from '..';
import RestClient from '../../../../..';

class Archive {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/archive`;
  }

  /**
   * Operation: Archive Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/archive
   */
  async post(): Promise<string> {
    const r = await this.rc.post<string>(this.path());
    return r.data;
  }
}

export default Archive;
