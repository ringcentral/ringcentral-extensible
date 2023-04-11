import Meeting from '../../../../../definitions/Meeting';
import MeetingPage from '../../../../../definitions/MeetingPage';
import ListVideoMeetingsParameters from '../../../../../definitions/ListVideoMeetingsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  meetingId: string | null;

  constructor(parent: ParentInterface, meetingId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.meetingId = meetingId;
  }

  path(withParameter = true): string {
    if (withParameter && this.meetingId !== null) {
      return `${this.parent.path()}/meetings/${this.meetingId}`;
    }
    return `${this.parent.path()}/meetings`;
  }

  /**
   * Returns the list of user meetings.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/history/meetings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  async list(queryParams?: ListVideoMeetingsParameters, restRequestConfig?: RestRequestConfig): Promise<MeetingPage> {
    const r = await this.rc.get<MeetingPage>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a user meeting by ID.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/history/meetings/{meetingId}
   * Rate Limit Group: Light
   * App Permission: Video
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<Meeting> {
    if (this.meetingId === null) {
      throw new Error('meetingId must be specified.');
    }
    const r = await this.rc.get<Meeting>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
