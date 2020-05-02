import {NotificationSettingsUpdateRequest} from '../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../..';

class NotificationSettings {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/notification-settings`;
  }

  /**
   * Operation: Get Notification Settings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings
   */
  async get(): Promise<NotificationSettings> {
    const r = await this.rc.get<NotificationSettings>(this.path());
    return r.data;
  }

  /**
   * Operation: Update Notification Settings
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings
   */
  async put(
    notificationSettingsUpdateRequest: NotificationSettingsUpdateRequest
  ): Promise<NotificationSettings> {
    const r = await this.rc.put<NotificationSettings>(
      this.path(),
      notificationSettingsUpdateRequest
    );
    return r.data;
  }
}

export default NotificationSettings;
