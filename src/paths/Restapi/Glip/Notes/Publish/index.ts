import Parent from '..';
import RestClient from '../../../../..';

class Publish {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/publish`;
  }

  /**
   * Operation: Publish Note
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/notes/{noteId}/publish
   */
  async post(): Promise<string> {
    const r = await this.rc.post(this.path());
    return r.data;
  }
}

export default Publish;
