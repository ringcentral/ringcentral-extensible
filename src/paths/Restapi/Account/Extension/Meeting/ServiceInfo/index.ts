import MeetingServiceInfoRequest from '../../../../../../definitions/MeetingServiceInfoRequest'
import MeetingServiceInfoResource from '../../../../../../definitions/MeetingServiceInfoResource'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/service-info`
  }

  /**
   * Operation: Get Meeting Service Info
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info
   */
  async get(): Promise<MeetingServiceInfoResource> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Meeting Service Info
   * Http patch /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info
   */
  async patch(meetingServiceInfoRequest: MeetingServiceInfoRequest): Promise<MeetingServiceInfoResource> {
    return this.rc.patch(this.path(), meetingServiceInfoRequest)
  }
}

export default Index
