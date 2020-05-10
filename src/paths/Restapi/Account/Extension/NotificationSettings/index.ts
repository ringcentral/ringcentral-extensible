import {RestRequestConfig} from '../../../../../Rest';
import {NotificationSettingsUpdateRequest} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class NotificationSettings {
  rc: RingCentral;
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
  async get(config?: RestRequestConfig): Promise<NotificationSettings> {
    const r = await this.rc.get<NotificationSettings>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Notification Settings
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings
   */
  async put(
    notificationSettingsUpdateRequest: NotificationSettingsUpdateRequest,
    config?: RestRequestConfig
  ): Promise<NotificationSettings> {
    const r = await this.rc.put<NotificationSettings>(
      this.path(),
      notificationSettingsUpdateRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default NotificationSettings;
