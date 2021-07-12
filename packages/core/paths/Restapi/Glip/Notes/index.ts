import Publish from './Publish';
import Unlock from './Unlock';
import Lock from './Lock';
import {RestRequestConfig} from '../../../../Rest';
import {
  GetGlipNoteInfo,
  GlipNoteCreate,
  GlipNoteInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  noteId: string | null;

  constructor(parent: Parent, noteId: string | null = null) {
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
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GetGlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.get<GetGlipNoteInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes the specified note.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Edits a note. Notes can be edited by any user if posted to a chat. the user belongs to.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/notes/{noteId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async patch(
    glipNoteCreate: GlipNoteCreate,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }
    const r = await this.rc.patch<GlipNoteInfo>(
      this.path(),
      glipNoteCreate,
      undefined,
      restRequestConfig
    );
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
