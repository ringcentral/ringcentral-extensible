import {RestRequestConfig} from '../../../../Rest';
import {
  ListMeetingRecordingsResponse,
  ListAccountMeetingRecordingsParameters,
} from '../../../../definitions';
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
   * Operation: Get Account Meeting Recordings List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/meeting-recordings
   */
  async get(
    queryParams?: ListAccountMeetingRecordingsParameters,
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

export default Index;
