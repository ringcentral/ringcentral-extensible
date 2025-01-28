import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/unlock`;
  }
  /**
   * Unlocks a note letting other users edit this note. Once the note is locked (by another user) it cannot be unlocked during 5 hours since the lock datetime.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/notes/{noteId}/unlock
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
