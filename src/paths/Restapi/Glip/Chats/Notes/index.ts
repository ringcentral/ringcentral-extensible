import { GlipNoteInfo, GlipNoteCreate, GlipNotesInfo, ListChatNotesParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Notes {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/notes`
  }

  /**
   * Operation: Create Note
   * Http post /restapi/v1.0/glip/chats/{chatId}/notes
   */
  async post (glipNoteCreate: GlipNoteCreate): Promise<GlipNoteInfo> {
    return this.rc.post(this.path(), glipNoteCreate)
  }

  /**
   * Operation: Get Chat Notes
   * Http get /restapi/v1.0/glip/chats/{chatId}/notes
   */
  async get (queryParams?: ListChatNotesParameters): Promise<GlipNotesInfo> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Notes
