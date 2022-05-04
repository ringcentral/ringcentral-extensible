import { RestRequestConfig } from '../../../../../Rest';
import { UserVideoConfiguration } from '../../../../../definitions';
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
    return `${this.parent.path()}/video-configuration`;
  }

  /**
   * Returns information about video configuration of the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration
   * Rate Limit Group: Light
   * App Permission: Meetings
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<UserVideoConfiguration> {
    const r = await this.rc.get<UserVideoConfiguration>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Allows to update user video settings, for example video provider.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration
   * Rate Limit Group: Light
   * App Permission: Meetings
   */
  async put(userVideoConfiguration: UserVideoConfiguration, restRequestConfig?: RestRequestConfig): Promise<UserVideoConfiguration> {
    const r = await this.rc.put<UserVideoConfiguration>(this.path(), userVideoConfiguration, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
