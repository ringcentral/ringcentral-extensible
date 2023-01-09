import ListMeetingRecordingsResponse from '../../../../definitions/ListMeetingRecordingsResponse';
import ListAccountMeetingRecordingsParameters from '../../../../definitions/ListAccountMeetingRecordingsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
   */
  async get(queryParams?: ListAccountMeetingRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<ListMeetingRecordingsResponse> {
    const r = await this.rc.get<ListMeetingRecordingsResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
