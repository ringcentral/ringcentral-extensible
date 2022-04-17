import { RestRequestConfig } from '../../../../../Rest';
import { GlipPostMembersListBody } from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/add`;
  }

  /**
   * Adds members to the specified team. A team is a chat between 2 and more participants assigned with specific name.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/teams/{chatId}/add
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(
    glipPostMembersListBody: GlipPostMembersListBody,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      glipPostMembersListBody,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
