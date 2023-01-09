import TMWebhookInfo from '../../../../definitions/TMWebhookInfo';
import TMWebhookList from '../../../../definitions/TMWebhookList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/webhooks`;
  }

  /**
   * Returns webhooks which are available for the current user by group ID.
   * HTTP Method: get
   * Endpoint: /team-messaging/{version}/groups/{groupId}/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMWebhookList> {
    const r = await this.rc.get<TMWebhookList>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new webhook.
   * HTTP Method: post
   * Endpoint: /team-messaging/{version}/groups/{groupId}/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<TMWebhookInfo> {
    const r = await this.rc.post<TMWebhookInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
