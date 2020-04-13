import GlipNotesInfo from '../../../../../definitions/GlipNotesInfo'
import GlipNoteCreate from '../../../../../definitions/GlipNoteCreate'
import GlipNoteInfo from '../../../../../definitions/GlipNoteInfo'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/notes`
  }

  /**
   * Operation: Create Note
   * Http post /restapi/v1.0/glip/chats/{chatId}/notes
   */
  async post(GlipNoteCreate glipNoteCreate): Promise<GlipNoteInfo> {
    return this.rc.post(this.path(), glipNoteCreate)
  }

  /**
   * Operation: Get Chat Notes
   * Http get /restapi/v1.0/glip/chats/{chatId}/notes
   */
  async get(ListChatNotesParameters queryParams = null): Promise<GlipNotesInfo> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
