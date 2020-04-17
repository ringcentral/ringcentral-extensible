import AssistedUsersResource from '../../../../../../definitions/AssistedUsersResource'
import Parent from '..'
import RestClient from '../../../../../..'

class Assisted {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/assisted`
  }

  /**
   * Operation: Get Assisted Users
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted
   */
  async get(): Promise<AssistedUsersResource> {
    return this.rc.get(this.path())
  }
}

export default Assisted
