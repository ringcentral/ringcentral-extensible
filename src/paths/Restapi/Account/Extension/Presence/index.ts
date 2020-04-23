import { GetPresenceInfo, ReadUserPresenceStatusParameters, PresenceInfoResponse, PresenceInfoResource } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Presence {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/presence`
  }

  /**
   * Operation: Get User Presence Status
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async get (queryParams?: ReadUserPresenceStatusParameters): Promise<GetPresenceInfo> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update User Presence Status
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence
   */
  async put (presenceInfoResource: PresenceInfoResource): Promise<PresenceInfoResponse> {
    return this.rc.put(this.path(), presenceInfoResource)
  }
}

export default Presence
