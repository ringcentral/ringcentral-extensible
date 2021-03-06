import {RestRequestConfig} from '../../../../../Rest';
import {
  ListUserMeetingRecordingsParameters,
  ListMeetingRecordingsResponse,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
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
   * Returns the list of meetings recordings for the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-recordings
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: MeetingsRecordings
   */
  async get(
    queryParams?: ListUserMeetingRecordingsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<ListMeetingRecordingsResponse> {
    const r = await this.rc.get<ListMeetingRecordingsResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
