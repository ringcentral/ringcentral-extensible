import Parent from '..';
import RestClient from '../../../../../..';

class Text {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/text`;
  }

  /**
   * Operation: Update Post
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text
   */
  async put(body: string): Promise<string> {
    const r = await this.rc.put(this.path(), body);
    return r.data;
  }
}

export default Text;
