import {RestRequestConfig} from '../../../../Rest';
import {
  ReadGlipEventsParameters,
  GlipEventsInfo,
  GlipEventCreate,
  GlipEventInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  eventId: string | null;

  constructor(parent: Parent, eventId: string | null = null) {
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
   * Endpoint: /restapi/{apiVersion}/glip/events
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async list(
    queryParams?: ReadGlipEventsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipEventsInfo> {
    const r = await this.rc.get<GlipEventsInfo>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new calendar event.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/events
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async post(
    glipEventCreate: GlipEventCreate,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipEventInfo> {
    const r = await this.rc.post<GlipEventInfo>(
      this.path(false),
      glipEventCreate,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns the specified calendar event(s) by ID(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.get<GlipEventInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the specified calendar event.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/glip/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async put(
    glipEventCreate: GlipEventCreate,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.put<GlipEventInfo>(
      this.path(),
      glipEventCreate,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes the specified calendar event.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/events/{eventId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
