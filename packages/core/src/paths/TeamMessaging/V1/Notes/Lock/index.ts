import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/lock`;
  }

  /**
   * Locks a note providing the user with the unique write access for 5 hours.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/notes/{noteId}/lock
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
