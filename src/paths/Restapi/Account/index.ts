import GetAccountInfoResponse from '../../../definitions/GetAccountInfoResponse'
import Parent from '..'
import RestClient from '../../..'

class Index {
  rc: RestClient
  accountId: string
  parent: Parent

  constructor(parent: Parent, accountId: string = "~") {
    this.parent = parent
    this.rc = parent.rc
    this.accountId = accountId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.accountId != null) {
      return `${this.parent.path()}/account/${this.accountId}`
    }

    return `${this.parent.path()}/account`
  }

  /**
   * Operation: Get Account Info
   * Http get /restapi/v1.0/account/{accountId}
   */
  async get(): Promise<GetAccountInfoResponse> {
    if (!this.accountId || this.accountId === null) {
      throw new Error("accountId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
