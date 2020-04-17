import { GlipEventsInfo, ReadGlipEventsParameters, GlipEventInfo, GlipEventCreate } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Events {
  rc: RestClient
  eventId: string
  parent: Parent

  constructor(parent: Parent, eventId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.eventId = eventId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.eventId !== null) {
      return `${this.parent.path()}/events/${this.eventId}`
    }

    return `${this.parent.path()}/events`
  }

  /**
   * Operation: Get User Events List
   * Http get /restapi/v1.0/glip/events
   */
  async list(queryParams?: ReadGlipEventsParameters): Promise<GlipEventsInfo> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Event
   * Http post /restapi/v1.0/glip/events
   */
  async post(glipEventCreate: GlipEventCreate): Promise<GlipEventInfo> {
    return this.rc.post(this.path(false), glipEventCreate)
  }

  /**
   * Operation: Get Event
   * Http get /restapi/v1.0/glip/events/{eventId}
   */
  async get(): Promise<GlipEventInfo> {
    if (this.eventId === undefined || this.eventId === null) {
      throw new Error("eventId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Event
   * Http put /restapi/v1.0/glip/events/{eventId}
   */
  async put(glipEventCreate: GlipEventCreate): Promise<GlipEventInfo> {
    if (this.eventId === undefined || this.eventId === null) {
      throw new Error("eventId must not be undefined or null")
    }

    return this.rc.put(this.path(), glipEventCreate)
  }

  /**
   * Operation: Delete Event
   * Http delete /restapi/v1.0/glip/events/{eventId}
   */
  async delete(): Promise<string> {
    if (this.eventId === undefined || this.eventId === null) {
      throw new Error("eventId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Events
