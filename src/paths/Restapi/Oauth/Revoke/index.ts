import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/revoke`
  }

  /**
   * Operation: Revoke Token
   * Http post /restapi/oauth/revoke
   */
  async post(RevokeTokenRequest revokeTokenRequest): Promise<string> {
    var dict = new System.Collections.Generic.Dictionary<string, string>()
    RingCentral.Utils.GetPairs(revokeTokenRequest)
      .ToList().ForEach(t => dict.Add(t.name, t.value.ToString()))
    return this.rc.Post(this.path(), new FormUrlEncodedContent(dict))
  }
}

export default Index
