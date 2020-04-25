import Parent from '..'
import RestClient from '../../../../..'

class Content {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/content`
  }

  /**
   * Operation: Get Call Recordings Data
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/recording/{recordingId}/content
   */
  async get (): Promise<Buffer> {
    return this.rc.get(this.path(), undefined, { responseType: 'arraybuffer' })
  }
}

export default Content
