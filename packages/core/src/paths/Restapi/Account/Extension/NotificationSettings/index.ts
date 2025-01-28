import NotificationSettingsUpdateRequest from "../../../../../definitions/NotificationSettingsUpdateRequest";
import NotificationSettings from "../../../../../definitions/NotificationSettings";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/notification-settings`;
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
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<NotificationSettings> {
    const r = await this.rc.get<NotificationSettings>(
      this.path(),
      undefined,
      restRequestConfig,
    );
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
  public async put(
    notificationSettingsUpdateRequest: NotificationSettingsUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<NotificationSettings> {
    const r = await this.rc.put<NotificationSettings>(
      this.path(),
      notificationSettingsUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
