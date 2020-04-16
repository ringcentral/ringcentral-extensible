import Check from './Check'
import AuthProfileResource from '../../../../../definitions/AuthProfileResource'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/authz-profile`
  }

  /**
   * Operation: Get Authorization Profile
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile
   */
  async get(): Promise<AuthProfileResource> {
    return this.rc.get(this.path())
  }

  check(): Check {
    return new Check(this)
  }
}

export default Index
