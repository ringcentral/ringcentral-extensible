import Publish from './Publish';
import Unlock from './Unlock';
import Lock from './Lock';
import type TMNoteInfo from '../../../../definitions/TMNoteInfo';
import type PatchNoteNewParameters from '../../../../definitions/PatchNoteNewParameters';
import type TMCreateNoteRequest from '../../../../definitions/TMCreateNoteRequest';
import type TMNoteWithBodyInfo from '../../../../definitions/TMNoteWithBodyInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public noteId: string | null;

  public constructor(_parent: ParentInterface, noteId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.noteId = noteId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.noteId !== null) {
      return `${this._parent.path()}/notes/${this.noteId}`;
    }
    return `${this._parent.path()}/notes`;
  }
  /**
   * Returns the specified note(s). It is possible to fetch up to 50 notes per request.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMNoteWithBodyInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.get<TMNoteWithBodyInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified note.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Edits a note. Notes can be edited by any user if posted to a chat. the user belongs to.
   * HTTP Method: patch
   * Endpoint: /team-messaging/v1/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async patch(
    tMCreateNoteRequest: TMCreateNoteRequest,
    queryParams?: PatchNoteNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.patch<TMNoteInfo>(this.path(), tMCreateNoteRequest, queryParams, restRequestConfig);
    return r.data;
  }

  public lock(): Lock {
    return new Lock(this);
  }

  public unlock(): Unlock {
    return new Unlock(this);
  }

  public publish(): Publish {
    return new Publish(this);
  }
}
export default Index;
