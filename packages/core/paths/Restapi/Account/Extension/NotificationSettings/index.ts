import {RestRequestConfig} from '../../../../../Rest';
import {
  NotificationSettings,
  NotificationSettingsUpdateRequest,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
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
   * Returns notification settings for the current extension.
   *  <p>Knowledge Article: <a href="https://success.ringcentral.com/articles/RC_Knowledge_Article/9740">User Settings - Set up Message Notifications</a></p>
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadMessagesNotificationsSettings
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<NotificationSettings> {
    const r = await this.rc.get<NotificationSettings>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates notification settings for the current extension.
   * <p>Knowledge Article: <a href="https://success.ringcentral.com/articles/RC_Knowledge_Article/9740">User Settings - Set up Message Notifications</a></p>
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditMessagesNotificationsSettings
   */
  async put(
    notificationSettingsUpdateRequest: NotificationSettingsUpdateRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<NotificationSettings> {
    const r = await this.rc.put<NotificationSettings>(
      this.path(),
      notificationSettingsUpdateRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
