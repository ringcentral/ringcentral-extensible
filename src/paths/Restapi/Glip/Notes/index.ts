import Publish from './Publish';
import Unlock from './Unlock';
import Lock from './Lock';
import {
  GetGlipNoteInfo,
  GlipNoteInfo,
  GlipNoteCreate,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Notes {
  rc: RingCentral;
  noteId: string | null;
  parent: Parent;

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
   * Operation: Get Note
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/notes/{noteId}
   */
  async get(): Promise<GetGlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }

    const r = await this.rc.get<GetGlipNoteInfo>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Note
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/notes/{noteId}
   */
  async patch(glipNoteCreate: GlipNoteCreate): Promise<GlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }

    const r = await this.rc.patch<GlipNoteInfo>(this.path(), glipNoteCreate);
    return r.data;
  }

  /**
   * Operation: Delete Note
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/notes/{noteId}
   */
  async delete(): Promise<string> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
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

export default Notes;
