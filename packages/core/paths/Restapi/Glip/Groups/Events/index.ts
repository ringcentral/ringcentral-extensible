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
   * Returns a list of calendar events available for the current user within the specified group. Users can only see their personal tasks and public tasks.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/groups/{groupId}/events
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipEventInfo> {
    const r = await this.rc.get<GlipEventInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new calendar event within the specified group.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/groups/{groupId}/events
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async post(
    glipEventCreate: GlipEventCreate,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipEventInfo> {
    const r = await this.rc.post<GlipEventInfo>(
      this.path(),
      glipEventCreate,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
