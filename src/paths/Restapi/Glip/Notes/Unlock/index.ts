import Parent from '..'
import RestClient from '../../../../..'

class Unlock {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/unlock`
  }

  /**
   * Operation: Unlock Note
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/glip/notes/{noteId}/unlock
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Unlock
