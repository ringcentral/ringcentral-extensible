import GlipPreferencesInfo from '../../../../definitions/GlipPreferencesInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/preferences`;
  }

  /**
   * Returns information about user preferences.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/preferences
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipPreferencesInfo> {
    const r = await this.rc.get<GlipPreferencesInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
