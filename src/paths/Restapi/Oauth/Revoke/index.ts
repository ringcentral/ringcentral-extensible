import RevokeTokenRequest from '../../../../definitions/RevokeTokenRequest'
import Parent from '..'
import RestClient from '../../../..'

class Index {
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

export default Index
