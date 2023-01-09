import TMRemoveTeamMembersRequest from '../../../../definitions/TMRemoveTeamMembersRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/remove`;
  }

  /**
   * Removes members from the specified team.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/teams/{chatId}/remove
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMRemoveTeamMembersRequest: TMRemoveTeamMembersRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), tMRemoveTeamMembersRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
