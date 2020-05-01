import Parent from '..';
import RestClient from '../../../../..';

class Leave {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/leave`;
  }

  /**
   * Operation: Leave Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/leave
   */
  async post(): Promise<string> {
    const r = await this.rc.post(this.path());
    return r.data;
  }
}

export default Leave;
