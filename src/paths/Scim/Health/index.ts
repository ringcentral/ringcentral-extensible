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
    return `${this.parent.path()}/health`
  }

  /**
   * Operation: Check Health
   * Http get /scim/v2/health
   */
  async get(): Promise<string> {
    return this.rc.get(this.path())
  }
}

export default Index
