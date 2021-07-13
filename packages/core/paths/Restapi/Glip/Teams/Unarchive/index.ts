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
    return `${this.parent.path()}/unarchive`;
  }
  /**
   * Changes the status of the specified team to 'Active'. A team is a chat between 2 and more participants assigned with specific name.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/teams/{chatId}/unarchive
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
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
