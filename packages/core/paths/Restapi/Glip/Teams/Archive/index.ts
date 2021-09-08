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
    return `${this.parent.path()}/archive`;
  }
  /**
   * Changes the status of the specified team to 'Archived'. A team is a chat between 2 and more participants assigned with specific name.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/teams/{chatId}/archive
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
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
