import Publish from './Publish';
import Unlock from './Unlock';
import Lock from './Lock';
import GlipNoteInfo from '../../../../definitions/GlipNoteInfo';
import GlipNoteCreate from '../../../../definitions/GlipNoteCreate';
import GetGlipNoteInfo from '../../../../definitions/GetGlipNoteInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  noteId: string | null;

  constructor(parent: ParentInterface, noteId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.noteId = noteId;
  }

  path(withParameter = true): string {
    if (withParameter && this.noteId !== null) {
      return `${this.parent.path()}/notes/${this.noteId}`;
    }
    return `${this.parent.path()}/notes`;
  }

  /**
   * Returns the specified note(s). It is possible to fetch up to 50 notes per request.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GetGlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.get<GetGlipNoteInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified note.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Edits a note. Notes can be edited by any user if posted to a chat. the user belongs to.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async patch(glipNoteCreate: GlipNoteCreate, restRequestConfig?: RestRequestConfig): Promise<GlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.patch<GlipNoteInfo>(this.path(), glipNoteCreate, undefined, restRequestConfig);
    return r.data;
  }

  lock(): Lock {
    return new Lock(this);
  }

  unlock(): Unlock {
    return new Unlock(this);
  }

  publish(): Publish {
    return new Publish(this);
  }
}
export default Index;
