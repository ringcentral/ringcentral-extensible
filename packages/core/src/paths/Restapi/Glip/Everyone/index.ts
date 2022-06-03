import UpdateGlipEveryoneRequest from '../../../../definitions/UpdateGlipEveryoneRequest';
import GlipEveryoneInfo from '../../../../definitions/GlipEveryoneInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipEveryoneInfo> {
    const r = await this.rc.get<GlipEveryoneInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates Everyone chat information. Everyone chat is a company level chat including all employees; assigned with specific name.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/glip/everyone
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async patch(updateGlipEveryoneRequest: UpdateGlipEveryoneRequest, restRequestConfig?: RestRequestConfig): Promise<GlipEveryoneInfo> {
    const r = await this.rc.patch<GlipEveryoneInfo>(this.path(), updateGlipEveryoneRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
