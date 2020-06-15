import {RestRequestConfig} from '../../../../../Rest';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/unfavorite`;
  }

  /**
   * Operation: Remove Chat from Favorites
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/unfavorite
   */
  async post(config?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
