import Parent from '..'
import RestClient from '../../..'

class Health {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/health`
  }

  /**
   * Operation: Check Health
   * Rate Limit Group: NoThrottling
   * Http get /scim/v2/health
   */
  async get (): Promise<string> {
    const r = await this.rc.get(this.path())
    return r.data
  }
}

export default Health
