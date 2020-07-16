import Publish from './Publish';
import Unlock from './Unlock';
import Lock from './Lock';
import {RestRequestConfig} from '../../../../Rest';
import {
  GetGlipNoteInfo,
  GlipNoteInfo,
  GlipNoteCreate,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
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
  async get(config?: RestRequestConfig): Promise<GetGlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }

    const r = await this.rc.get<GetGlipNoteInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Note
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/notes/{noteId}
   */
  async patch(
    glipNoteCreate: GlipNoteCreate,
    config?: RestRequestConfig
  ): Promise<GlipNoteInfo> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }

    const r = await this.rc.patch<GlipNoteInfo>(
      this.path(),
      glipNoteCreate,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Note
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/notes/{noteId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.noteId === null) {
      throw new Error('noteId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
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
