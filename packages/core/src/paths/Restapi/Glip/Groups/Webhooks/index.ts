import GlipWebhookInfo from '../../../../../definitions/GlipWebhookInfo';
import GlipWebhookList from '../../../../../definitions/GlipWebhookList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

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
   * Endpoint: /restapi/{apiVersion}/glip/groups/{groupId}/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipWebhookList> {
    const r = await this.rc.get<GlipWebhookList>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new webhook.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/groups/{groupId}/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<GlipWebhookInfo> {
    const r = await this.rc.post<GlipWebhookInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
