import TMAddTeamMembersRequest from '../../../../../definitions/TMAddTeamMembersRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/add`;
  }

  /**
   * Adds members to the specified team.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/teams/{chatId}/add
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(tMAddTeamMembersRequest: TMAddTeamMembersRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), tMAddTeamMembersRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
