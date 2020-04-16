import UpdateConferencingInfoRequest from '../../../../../definitions/UpdateConferencingInfoRequest'
import ReadConferencingSettingsParameters from '../../../../../definitions/ReadConferencingSettingsParameters'
import GetConferencingInfoResponse from '../../../../../definitions/GetConferencingInfoResponse'
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
    return `${this.parent.path()}/conferencing`
  }

  /**
   * Operation: Get User Conferencing Settings
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing
   */
  async get(queryParams?: ReadConferencingSettingsParameters): Promise<GetConferencingInfoResponse> {
    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Update User Conferencing Settings
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing
   */
  async put(updateConferencingInfoRequest: UpdateConferencingInfoRequest): Promise<GetConferencingInfoResponse> {
    return this.rc.put(this.path(), updateConferencingInfoRequest)
  }
}

export default Index
