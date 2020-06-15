import {RestRequestConfig} from '../../../../Rest';
import {
  GlipEveryoneInfo,
  UpdateGlipEveryoneRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
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
  async get(config?: RestRequestConfig): Promise<GlipEveryoneInfo> {
    const r = await this.rc.get<GlipEveryoneInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Everyone Сhat
   * Rate Limit Group: Medium
   * Http patch /restapi/v1.0/glip/everyone
   */
  async patch(
    updateGlipEveryoneRequest: UpdateGlipEveryoneRequest,
    config?: RestRequestConfig
  ): Promise<GlipEveryoneInfo> {
    const r = await this.rc.patch<GlipEveryoneInfo>(
      this.path(),
      updateGlipEveryoneRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
