import type Meeting from "../../../../../definitions/Meeting";
import type MeetingPage from "../../../../../definitions/MeetingPage";
import type ListVideoMeetingsParameters from "../../../../../definitions/ListVideoMeetingsParameters";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public meetingId: string | null;

  public constructor(
    _parent: ParentInterface,
    meetingId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.meetingId = meetingId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.meetingId !== null) {
      return `${this._parent.path()}/meetings/${this.meetingId}`;
    }
    return `${this._parent.path()}/meetings`;
  }
  /**
   * Returns the list of user meetings.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/history/meetings
   * Rate Limit Group: Light
   * App Permission: Video
   */
  public async list(
    queryParams?: ListVideoMeetingsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<MeetingPage> {
    const r = await this.rc.get<MeetingPage>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a user meeting by ID.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/history/meetings/{meetingId}
   * Rate Limit Group: Light
   * App Permission: Video
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<Meeting> {
    if (this.meetingId === null) {
      throw new Error("meetingId must be specified.");
    }
    const r = await this.rc.get<Meeting>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
