import TMCreateEventRequest from '../../../../definitions/TMCreateEventRequest';
import TMEventInfo from '../../../../definitions/TMEventInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/events`;
  }

  /**
   * Returns a list of calendar events available for the current user within the specified group. Users can only see their personal tasks and public tasks.
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/groups/{groupId}/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMEventInfo> {
    const r = await this.rc.get<TMEventInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new calendar event within the specified group.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/groups/{groupId}/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMCreateEventRequest: TMCreateEventRequest, restRequestConfig?: RestRequestConfig): Promise<TMEventInfo> {
    const r = await this.rc.post<TMEventInfo>(this.path(), tMCreateEventRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
