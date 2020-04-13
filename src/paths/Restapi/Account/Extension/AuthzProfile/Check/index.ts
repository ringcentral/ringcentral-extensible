import AuthProfileCheckResource from '../../../../../../definitions/AuthProfileCheckResource'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/check`
  }

  /**
   * Operation: Check User Permission
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check
   */
  async get(CheckUserPermissionParameters queryParams = null): Promise<AuthProfileCheckResource> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
