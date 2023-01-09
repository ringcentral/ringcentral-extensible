import TMPreferencesInfo from '../../../definitions/TMPreferencesInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

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
   * Endpoint: /team-messaging/{version}/preferences
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMPreferencesInfo> {
    const r = await this.rc.get<TMPreferencesInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
