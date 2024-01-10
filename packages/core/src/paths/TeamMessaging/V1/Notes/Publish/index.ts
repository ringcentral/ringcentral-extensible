import type TMNoteInfo from '../../../../../definitions/TMNoteInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/publish`;
  }
  /**
   * Publishes a note making it visible to other users.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/notes/{noteId}/publish
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<TMNoteInfo> {
    const r = await this.rc.post<TMNoteInfo>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
