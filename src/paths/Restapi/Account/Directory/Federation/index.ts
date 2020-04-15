import FederationResource from '../../../../../definitions/FederationResource'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/federation`
  }

  /**
   * Operation: Get Account Federation
   * Http get /restapi/v1.0/account/{accountId}/directory/federation
   */
  async get(): Promise<FederationResource> {
    return this.rc.get(this.path())
  }
}

export default Index
