import TMWebhookInfo from '../../../../../definitions/TMWebhookInfo';
import TMWebhookList from '../../../../../definitions/TMWebhookList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/webhooks`;
  }

  /**
   * Returns webhooks which are available for the current user by group ID.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/groups/{groupId}/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMWebhookList> {
    const r = await this.rc.get<TMWebhookList>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new webhook.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/groups/{groupId}/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<TMWebhookInfo> {
    const r = await this.rc.post<TMWebhookInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
