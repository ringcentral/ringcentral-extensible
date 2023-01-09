import ListMeetingRecordingsResponse from '../../../../../definitions/ListMeetingRecordingsResponse';
import ListUserMeetingRecordingsParameters from '../../../../../definitions/ListUserMeetingRecordingsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Returns the list of meetings recordings for the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/meeting-recordings
   * Rate Limit Group: Medium
   * App Permission: Meetings
   */
  async get(queryParams?: ListUserMeetingRecordingsParameters, restRequestConfig?: RestRequestConfig): Promise<ListMeetingRecordingsResponse> {
    const r = await this.rc.get<ListMeetingRecordingsResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
