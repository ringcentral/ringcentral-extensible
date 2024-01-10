import type TMEventInfo from '../../../../definitions/TMEventInfo';
import type TMCreateEventRequest from '../../../../definitions/TMCreateEventRequest';
import type TMEventList from '../../../../definitions/TMEventList';
import type ReadGlipEventsNewParameters from '../../../../definitions/ReadGlipEventsNewParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public eventId: string | null;

  public constructor(_parent: ParentInterface, eventId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.eventId = eventId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.eventId !== null) {
      return `${this._parent.path()}/events/${this.eventId}`;
    }
    return `${this._parent.path()}/events`;
  }
  /**
   * Returns all calendar events created by the current user.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async list(
    queryParams?: ReadGlipEventsNewParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMEventList> {
    const r = await this.rc.get<TMEventList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new calendar event.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/events
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(
    tMCreateEventRequest: TMCreateEventRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMEventInfo> {
    const r = await this.rc.post<TMEventInfo>(this.path(false), tMCreateEventRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the specified calendar event(s) by ID(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }
    const r = await this.rc.get<TMEventInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the specified calendar event.
   * HTTP Method: put
   * Endpoint: /team-messaging/v1/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async put(
    tMCreateEventRequest: TMCreateEventRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }
    const r = await this.rc.put<TMEventInfo>(this.path(), tMCreateEventRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes the specified calendar event.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
