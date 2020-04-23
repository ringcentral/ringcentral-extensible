import { ListMeetingRecordingsResponse, ListAccountMeetingRecordingsParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

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
   * Operation: Get Account Meeting Recordings List
   * Http get /restapi/v1.0/account/{accountId}/meeting-recordings
   */
  async get (queryParams?: ListAccountMeetingRecordingsParameters): Promise<ListMeetingRecordingsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default MeetingRecordings
