import RevokeTokenRequest from '../../../../definitions/RevokeTokenRequest'
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
    return `${this.parent.path()}/revoke`
  }

  /**
   * Operation: Revoke Token
   * Http post /restapi/oauth/revoke
   */
  async post(revokeTokenRequest: RevokeTokenRequest): Promise<string> {
    var dict = new System.Collections.Generic.Dictionary<string, string>()
    RingCentral.Utils.GetPairs(revokeTokenRequest)
      .ToList().ForEach(t => dict.Add(t.name, t.value.ToString()))
    return this.rc.post(this.path(), new FormUrlEncodedContent(dict))
  }
}

export default Index
