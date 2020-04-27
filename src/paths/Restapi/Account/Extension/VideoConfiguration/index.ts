import { UserVideoConfiguration } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class VideoConfiguration {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/video-configuration`
  }

  /**
   * Operation: Get User Video Configuration
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration
   */
  async get (): Promise<UserVideoConfiguration> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update User Video Configuration
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/video-configuration
   */
  async put (userVideoConfiguration: UserVideoConfiguration): Promise<UserVideoConfiguration> {
    return this.rc.put(this.path(), userVideoConfiguration)
  }
}

export default VideoConfiguration
