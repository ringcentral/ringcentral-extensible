import {RestRequestConfig} from '../../../../../Rest';
import {GlipEventInfo, GlipEventCreate} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
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
   * Operation: Get Group Events
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/groups/{groupId}/events
   */
  async get(config?: RestRequestConfig): Promise<GlipEventInfo> {
    const r = await this.rc.get<GlipEventInfo>(this.path(), undefined, config);
    return r.data;
  }

  /**
   * Operation: Create Event by Group ID
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/events
   */
  async post(
    glipEventCreate: GlipEventCreate,
    config?: RestRequestConfig
  ): Promise<GlipEventInfo> {
    const r = await this.rc.post<GlipEventInfo>(
      this.path(),
      glipEventCreate,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
