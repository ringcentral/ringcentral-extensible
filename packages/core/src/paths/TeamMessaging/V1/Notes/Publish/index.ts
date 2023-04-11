import TMNoteInfo from '../../../../../definitions/TMNoteInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/publish`;
  }

  /**
   * Publishes a note making it visible to other users.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/notes/{noteId}/publish
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<TMNoteInfo> {
    const r = await this.rc.post<TMNoteInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
