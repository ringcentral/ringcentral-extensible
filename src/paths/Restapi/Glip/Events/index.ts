import {RestRequestConfig} from '../../../../Rest';
import {
  GlipEventsInfo,
  ReadGlipEventsParameters,
  GlipEventInfo,
  GlipEventCreate,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Events {
  rc: RingCentral;
  eventId: string | null;
  parent: Parent;

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
   * Operation: Get User Events List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/events
   */
  async list(
    queryParams?: ReadGlipEventsParameters,
    config?: RestRequestConfig
  ): Promise<GlipEventsInfo> {
    const r = await this.rc.get<GlipEventsInfo>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Event
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/events
   */
  async post(
    glipEventCreate: GlipEventCreate,
    config?: RestRequestConfig
  ): Promise<GlipEventInfo> {
    const r = await this.rc.post<GlipEventInfo>(
      this.path(false),
      glipEventCreate,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Event
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/events/{eventId}
   */
  async get(config?: RestRequestConfig): Promise<GlipEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.get<GlipEventInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Update Event
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/glip/events/{eventId}
   */
  async put(
    glipEventCreate: GlipEventCreate,
    config?: RestRequestConfig
  ): Promise<GlipEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.put<GlipEventInfo>(
      this.path(),
      glipEventCreate,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Event
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/events/{eventId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }
}

export default Events;
