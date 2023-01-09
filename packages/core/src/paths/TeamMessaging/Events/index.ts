import TMEventInfo from '../../../definitions/TMEventInfo';
import TMCreateEventRequest from '../../../definitions/TMCreateEventRequest';
import TMEventList from '../../../definitions/TMEventList';
import ReadGlipEventsNewParameters from '../../../definitions/ReadGlipEventsNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  eventId: string | null;

  constructor(parent: ParentInterface, eventId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.eventId = eventId;
  }

  path(withParameter = true): string {
    if (withParameter && this.eventId !== null) {
      return `${this.parent.path()}/events/${this.eventId}`;
    }
    return `${this.parent.path()}/events`;
  }

  /**
   * Returns all calendar events created by the current user.
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async list(queryParams?: ReadGlipEventsNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMEventList> {
    const r = await this.rc.get<TMEventList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new calendar event.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(tMCreateEventRequest: TMCreateEventRequest, restRequestConfig?: RestRequestConfig): Promise<TMEventInfo> {
    const r = await this.rc.post<TMEventInfo>(this.path(false), tMCreateEventRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the specified calendar event(s) by ID(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }
    const r = await this.rc.get<TMEventInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the specified calendar event.
   * HTTP Method: put
   * Endpoint: /team-messaging/{version}/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async put(tMCreateEventRequest: TMCreateEventRequest, restRequestConfig?: RestRequestConfig): Promise<TMEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }
    const r = await this.rc.put<TMEventInfo>(this.path(), tMCreateEventRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified calendar event.
   * HTTP Method: delete
   * Endpoint: /team-messaging/{version}/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
