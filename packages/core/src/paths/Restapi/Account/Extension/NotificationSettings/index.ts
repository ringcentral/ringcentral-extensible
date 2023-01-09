import NotificationSettingsUpdateRequest from '../../../../../definitions/NotificationSettingsUpdateRequest';
import NotificationSettings from '../../../../../definitions/NotificationSettings';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/notification-settings`;
  }

  /**
   * Returns notification settings for the current extension.
 *
 * Knowledge Article: [User Settings - Set Up Message Notifications](https://success.ringcentral.com/articles/RC_Knowledge_Article/9740)
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadMessagesNotificationsSettings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<NotificationSettings> {
    const r = await this.rc.get<NotificationSettings>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates notification settings for the current extension.
 * Knowledge Article: [User Settings - Set Up Message Notifications](https://success.ringcentral.com/articles/RC_Knowledge_Article/9740)
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/notification-settings
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditMessagesNotificationsSettings
   */
  async put(notificationSettingsUpdateRequest: NotificationSettingsUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<NotificationSettings> {
    const r = await this.rc.put<NotificationSettings>(this.path(), notificationSettingsUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
