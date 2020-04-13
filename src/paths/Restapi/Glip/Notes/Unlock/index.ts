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
    return `${this.parent.path()}/unlock`
  }

  /**
   * Operation: Unlock Note
   * Http post /restapi/v1.0/glip/notes/{noteId}/unlock
   */
  async post(): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Index
