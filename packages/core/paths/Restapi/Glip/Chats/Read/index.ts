import {RestRequestConfig} from '../../../../../Rest';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/read`;
  }
  /**
   * Sets the specified chat status to 'Read' for the current user.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/chats/{chatId}/read
   * Rate Limit Group: Medium
   * App Permission: GlipInternal
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
