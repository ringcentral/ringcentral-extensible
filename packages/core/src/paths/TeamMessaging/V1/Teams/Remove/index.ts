import TMRemoveTeamMembersRequest from '../../../../../definitions/TMRemoveTeamMembersRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/remove`;
  }

  /**
   * Removes members from the specified team.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/teams/{chatId}/remove
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(tMRemoveTeamMembersRequest: TMRemoveTeamMembersRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), tMRemoveTeamMembersRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
