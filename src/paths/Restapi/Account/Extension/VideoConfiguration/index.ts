import {UserVideoConfiguration} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class VideoConfiguration {
  rc: RestClient;
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
  async get(): Promise<UserVideoConfiguration> {
    const r = await this.rc.get<UserVideoConfiguration>(this.path());
    return r.data;
  }

  /**
   * Operation: Update User Video Configuration
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration
   */
  async put(
    userVideoConfiguration: UserVideoConfiguration
  ): Promise<UserVideoConfiguration> {
    const r = await this.rc.put<UserVideoConfiguration>(
      this.path(),
      userVideoConfiguration
    );
    return r.data;
  }
}

export default VideoConfiguration;
