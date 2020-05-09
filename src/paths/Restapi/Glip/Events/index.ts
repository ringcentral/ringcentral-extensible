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
  async list(queryParams?: ReadGlipEventsParameters): Promise<GlipEventsInfo> {
    const r = await this.rc.get<GlipEventsInfo>(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Create Event
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/events
   */
  async post(glipEventCreate: GlipEventCreate): Promise<GlipEventInfo> {
    const r = await this.rc.post<GlipEventInfo>(
      this.path(false),
      glipEventCreate
    );
    return r.data;
  }

  /**
   * Operation: Get Event
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/events/{eventId}
   */
  async get(): Promise<GlipEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.get<GlipEventInfo>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Event
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/glip/events/{eventId}
   */
  async put(glipEventCreate: GlipEventCreate): Promise<GlipEventInfo> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.put<GlipEventInfo>(this.path(), glipEventCreate);
    return r.data;
  }

  /**
   * Operation: Delete Event
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/events/{eventId}
   */
  async delete(): Promise<string> {
    if (this.eventId === null) {
      throw new Error('eventId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path());
    return r.data;
  }
}

export default Events;
