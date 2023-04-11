import TMAddTeamMembersRequest from '../../../../../definitions/TMAddTeamMembersRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/add`;
  }

  /**
   * Adds members to the specified team.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/teams/{chatId}/add
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMAddTeamMembersRequest: TMAddTeamMembersRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), tMAddTeamMembersRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
