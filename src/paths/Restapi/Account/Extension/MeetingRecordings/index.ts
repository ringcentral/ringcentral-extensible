import {RestRequestConfig} from '../../../../../Rest';
import {
  ListMeetingRecordingsResponse,
  ListUserMeetingRecordingsParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class MeetingRecordings {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/meeting-recordings`;
  }

  /**
   * Operation: Get User Meeting Recordings List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings
   */
  async get(
    queryParams?: ListUserMeetingRecordingsParameters,
    config?: RestRequestConfig
  ): Promise<ListMeetingRecordingsResponse> {
    const r = await this.rc.get<ListMeetingRecordingsResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default MeetingRecordings;
