import Activate from './Activate';
import Suspend from './Suspend';
import TMWebhookList from '../../../../definitions/TMWebhookList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  webhookId: string | null;

  constructor(parent: ParentInterface, webhookId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.webhookId = webhookId;
  }

  path(withParameter = true): string {
    if (withParameter && this.webhookId !== null) {
      return `${this.parent.path()}/webhooks/${this.webhookId}`;
    }
    return `${this.parent.path()}/webhooks`;
  }

  /**
   * Returns the list of all webhooks associated with the current account.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<TMWebhookList> {
    const r = await this.rc.get<TMWebhookList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns webhooks(s) with the specified id(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/webhooks/{webhookId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMWebhookList> {
    if (this.webhookId === null) {
      throw new Error('webhookId must be specified.');
    }
    const r = await this.rc.get<TMWebhookList>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a webhook by ID.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/webhooks/{webhookId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.webhookId === null) {
      throw new Error('webhookId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  suspend(): Suspend {
    return new Suspend(this);
  }

  activate(): Activate {
    return new Activate(this);
  }
}
export default Index;
