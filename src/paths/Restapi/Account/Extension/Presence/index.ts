import PresenceInfoResource from '../../../../../definitions/PresenceInfoResource'
import GetPresenceInfo from '../../../../../definitions/GetPresenceInfo'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/presence`
  }

  /**
   * Operation: Get User Presence Status
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async get(ReadUserPresenceStatusParameters queryParams = null): Promise<GetPresenceInfo> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update User Presence Status
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async put(PresenceInfoResource presenceInfoResource): Promise<PresenceInfoResource> {
    return this.rc.put(this.path(), presenceInfoResource)
  }
}

export default Index
