import {
  GlipEveryoneInfo,
  UpdateGlipEveryoneRequest,
} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class Everyone {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/everyone`;
  }

  /**
   * Operation: Get Everyone Chat
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/everyone
   */
  async get(): Promise<GlipEveryoneInfo> {
    const r = await this.rc.get<GlipEveryoneInfo>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Everyone Сhat
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/everyone
   */
  async patch(
    updateGlipEveryoneRequest: UpdateGlipEveryoneRequest
  ): Promise<GlipEveryoneInfo> {
    const r = await this.rc.patch<GlipEveryoneInfo>(
      this.path(),
      updateGlipEveryoneRequest
    );
    return r.data;
  }
}

export default Everyone;
