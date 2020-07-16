import {RestRequestConfig} from '../../../../../Rest';
import {UserVideoConfiguration} from '../../../../../definitions';
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
   * Operation: Get User Video Configuration
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration
   */
  async get(config?: RestRequestConfig): Promise<UserVideoConfiguration> {
    const r = await this.rc.get<UserVideoConfiguration>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update User Video Configuration
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration
   */
  async put(
    userVideoConfiguration: UserVideoConfiguration,
    config?: RestRequestConfig
  ): Promise<UserVideoConfiguration> {
    const r = await this.rc.put<UserVideoConfiguration>(
      this.path(),
      userVideoConfiguration,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
