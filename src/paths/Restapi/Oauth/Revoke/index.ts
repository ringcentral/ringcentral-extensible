import { RevokeTokenRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Revoke {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/revoke`
  }

  /**
   * Operation: Revoke Token
   * Http post /restapi/oauth/revoke
   */
  async post(revokeTokenRequest: RevokeTokenRequest): Promise<string> {
    return this.rc.post(this.path(), revokeTokenRequest)
  }
}

export default Revoke
