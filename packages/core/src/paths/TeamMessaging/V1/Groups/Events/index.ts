import type TMCreateEventRequest from "../../../../../definitions/TMCreateEventRequest";
import type TMEventInfo from "../../../../../definitions/TMEventInfo";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/events`;
  }
  /**
   * Returns a list of calendar events available for the current user within the specified group. Users can only see their personal tasks and public tasks.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/groups/{groupId}/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMEventInfo> {
    const r = await this.rc.get<TMEventInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new calendar event within the specified group.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/groups/{groupId}/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(
    tMCreateEventRequest: TMCreateEventRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMEventInfo> {
    const r = await this.rc.post<TMEventInfo>(
      this.path(),
      tMCreateEventRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
