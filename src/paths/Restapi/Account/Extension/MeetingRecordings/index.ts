import { ListMeetingRecordingsResponse, ListUserMeetingRecordingsParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class MeetingRecordings {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/meeting-recordings`
  }

  /**
   * Operation: Get User Meeting Recordings List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings
   */
  async get (queryParams?: ListUserMeetingRecordingsParameters): Promise<ListMeetingRecordingsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default MeetingRecordings
