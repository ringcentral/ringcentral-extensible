import { TokenInfo, GetTokenRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Token {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/token`
  }

  /**
   * Operation: Get Token
   * Http post /restapi/oauth/token
   */
  async post (getTokenRequest: GetTokenRequest): Promise<TokenInfo> {
    return this.rc.post(this.path(), getTokenRequest)
  }
}

export default Token
