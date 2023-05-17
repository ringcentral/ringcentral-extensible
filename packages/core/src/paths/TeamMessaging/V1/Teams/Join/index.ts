import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/join`;
  }

  /**
   * Adds the current user to the specified team.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/teams/{chatId}/join
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
