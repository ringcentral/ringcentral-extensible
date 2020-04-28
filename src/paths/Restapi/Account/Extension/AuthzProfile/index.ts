import Check from './Check'
import { AuthProfileResource } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class AuthzProfile {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/authz-profile`
  }

  /**
   * Operation: Get Authorization Profile
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile
   */
  async get (): Promise<AuthProfileResource> {
    const r = await this.rc.get(this.path())
    return r.data
  }

  check (): Check {
    return new Check(this)
  }
}

export default AuthzProfile
