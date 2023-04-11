import UserVideoConfiguration from '../../../../../definitions/UserVideoConfiguration';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/video-configuration`;
  }

  /**
   * Returns information about video configuration settings of the current user.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration
   * Rate Limit Group: Light
   * App Permission: VideoInternal
   * User Permission: Meetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<UserVideoConfiguration> {
    const r = await this.rc.get<UserVideoConfiguration>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Allows to update user video configuration settings, for example video provider.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/video-configuration
   * Rate Limit Group: Light
   * App Permission: VideoInternal
   */
  async put(userVideoConfiguration: UserVideoConfiguration, restRequestConfig?: RestRequestConfig): Promise<UserVideoConfiguration> {
    const r = await this.rc.put<UserVideoConfiguration>(this.path(), userVideoConfiguration, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
