import GetTokenRequest from '../../../../definitions/GetTokenRequest'
import TokenInfo from '../../../../definitions/TokenInfo'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/token`
  }

  /**
   * Operation: Get Token
   * Http post /restapi/oauth/token
   */
  async post(getTokenRequest: GetTokenRequest): Promise<TokenInfo> {
    var dict = new System.Collections.Generic.Dictionary<string, string>()
    RingCentral.Utils.GetPairs(getTokenRequest)
      .ToList().ForEach(t => dict.Add(t.name, t.value.ToString()))
    return this.rc.post(this.path(), new FormUrlEncodedContent(dict))
  }
}

export default Index
