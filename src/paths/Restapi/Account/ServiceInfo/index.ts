import GetServiceInfoResponse from '../../../../definitions/GetServiceInfoResponse'
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
    return `${this.parent.path()}/service-info`
  }

  /**
   * Operation: Get Account Service Info
   * Http get /restapi/v1.0/account/{accountId}/service-info
   */
  async get(): Promise<GetServiceInfoResponse> {
    return this.rc.get(this.path())
  }
}

export default Index
