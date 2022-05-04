import { RestRequestConfig } from '../../../../Rest';
import { ListAccountMeetingRecordingsParameters, ListMeetingRecordingsResponse } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

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
   * Returns the list of meeting recordings for the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/meeting-recordings
   * Rate Limit Group: Medium
   * App Permission: Meetings
   * User Permission: MeetingsRecordings
   */
  async get(queryParams?: ListAccountMeetingRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<ListMeetingRecordingsResponse> {
    const r = await this.rc.get<ListMeetingRecordingsResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
