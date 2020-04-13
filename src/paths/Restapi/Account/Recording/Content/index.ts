import byte[] from '../../../../../definitions/byte[]'
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
    return `${this.parent.path()}/content`
  }

  /**
   * Operation: Get Call Recordings Data
   * Http get /restapi/v1.0/account/{accountId}/recording/{recordingId}/content
   */
  async get(): Promise<byte[]> {
    return this.rc.get(this.path())
  }
}

export default Index
