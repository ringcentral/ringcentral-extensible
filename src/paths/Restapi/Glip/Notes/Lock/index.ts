import Parent from '..'
import RestClient from '../../../../..'

class Lock {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/lock`
  }

  /**
   * Operation: Lock Note
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/glip/notes/{noteId}/lock
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Lock
