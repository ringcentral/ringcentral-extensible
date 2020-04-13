import Parent from '..'
import RestClient from '../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/status`
  }

  /**
   * Operation: Get Service Status
   * Http get /restapi/v1.0/status
   */
  async get(): Promise<string> {
    return this.rc.get(this.path())
  }
}

export default Index
