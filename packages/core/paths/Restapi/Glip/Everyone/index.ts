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
   * Returns information about Everyone chat, which is a company level chat including all employees; assigned with specific name.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/everyone
   * Rate Limit Group: Light
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipEveryoneInfo> {
    const r = await this.rc.get<GlipEveryoneInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates Everyone chat information. Everyone chat is a company level chat including all employees; assigned with specific name.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/everyone
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async patch(
    updateGlipEveryoneRequest: UpdateGlipEveryoneRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<GlipEveryoneInfo> {
    const r = await this.rc.patch<GlipEveryoneInfo>(
      this.path(),
      updateGlipEveryoneRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
