import GlipNoteCreate from '../../../../definitions/GlipNoteCreate'
import GlipNoteInfo from '../../../../definitions/GlipNoteInfo'
import GetGlipNoteInfo from '../../../../definitions/GetGlipNoteInfo'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  noteId: string
  parent: Parent

  constructor(parent: Parent, noteId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.noteId = noteId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.noteId != null) {
      return `${this.parent.path()}/notes/${this.noteId}`
    }

    return `${this.parent.path()}/notes`
  }

  /**
   * Operation: Get Note
   * Http get /restapi/v1.0/glip/notes/{noteId}
   */
  async get(): Promise<GetGlipNoteInfo> {
    if (!this.noteId || this.noteId === null) {
      throw new Error("noteId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Note
   * Http patch /restapi/v1.0/glip/notes/{noteId}
   */
  async patch(GlipNoteCreate glipNoteCreate): Promise<GlipNoteInfo> {
    if (!this.noteId || this.noteId === null) {
      throw new Error("noteId must not be undefined or null")
    }

    return this.rc.patch(this.path(), glipNoteCreate)
  }

  /**
   * Operation: Delete Note
   * Http delete /restapi/v1.0/glip/notes/{noteId}
   */
  async delete(): Promise<string> {
    if (!this.noteId || this.noteId === null) {
      throw new Error("noteId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
