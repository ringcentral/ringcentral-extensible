import Activate from './Activate';
import Suspend from './Suspend';
import {RestRequestConfig} from '../../../../Rest';
import {GlipWebhookList} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  webhookId: string | null;

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
   * Returns the list of all webhooks associated with the current account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/webhooks
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<GlipWebhookList> {
    const r = await this.rc.get<GlipWebhookList>(
      this.path(false),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns webhooks(s) with the specified id(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/webhooks/{webhookId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipWebhookList> {
    if (this.webhookId === null) {
      throw new Error('webhookId must be specified.');
    }

    const r = await this.rc.get<GlipWebhookList>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Deletes a webhook by ID.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/glip/webhooks/{webhookId}
   * Rate Limit Group: Medium
   * App Permission: Glip
   * User Permission: Glip
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.webhookId === null) {
      throw new Error('webhookId must be specified.');
    }

    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
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
