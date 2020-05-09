import {GlipEventInfo, GlipEventCreate} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Events {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/events`;
  }

  /**
   * Operation: Create Event by Group ID
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/events
   */
  async post(glipEventCreate: GlipEventCreate): Promise<GlipEventInfo> {
    const r = await this.rc.post<GlipEventInfo>(this.path(), glipEventCreate);
    return r.data;
  }

  /**
   * Operation: Get Group Events
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/groups/{groupId}/events
   */
  async get(): Promise<GlipEventInfo> {
    const r = await this.rc.get<GlipEventInfo>(this.path());
    return r.data;
  }
}

export default Events;
