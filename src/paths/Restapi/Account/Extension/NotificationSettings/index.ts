import { NotificationSettingsUpdateRequest } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class NotificationSettings {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/notification-settings`
  }

  /**
   * Operation: Get Notification Settings
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings
   */
  async get(): Promise<NotificationSettings> {
    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Notification Settings
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings
   */
  async put(notificationSettingsUpdateRequest: NotificationSettingsUpdateRequest): Promise<NotificationSettings> {
    return this.rc.put(this.path(), notificationSettingsUpdateRequest)
  }
}

export default NotificationSettings
