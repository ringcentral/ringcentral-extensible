import Suspend from './Suspend';
import Activate from './Activate';
import {RestRequestConfig} from '../../../../Rest';
import {GlipWebhookList} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  webhookId: string | null;
  parent: Parent;

  constructor(parent: Parent, webhookId: string | null = null) {
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
   * Operation: Get Webhooks
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/webhooks
   */
  async list(config?: RestRequestConfig): Promise<GlipWebhookList> {
    const r = await this.rc.get<GlipWebhookList>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Webhook
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/webhooks/{webhookId}
   */
  async get(config?: RestRequestConfig): Promise<GlipWebhookList> {
    if (this.webhookId === null) {
      throw new Error('webhookId must be specified.');
    }

    const r = await this.rc.get<GlipWebhookList>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Webhook
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/glip/webhooks/{webhookId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.webhookId === null) {
      throw new Error('webhookId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  activate(): Activate {
    return new Activate(this);
  }

  suspend(): Suspend {
    return new Suspend(this);
  }
}

export default Index;
