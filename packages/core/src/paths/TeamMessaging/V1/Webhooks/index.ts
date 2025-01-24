import Activate from "./Activate";
import Suspend from "./Suspend";
import type TMWebhookList from "../../../../definitions/TMWebhookList";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public webhookId: string | null;

  public constructor(
    _parent: ParentInterface,
    webhookId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.webhookId = webhookId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.webhookId !== null) {
      return `${this._parent.path()}/webhooks/${this.webhookId}`;
    }
    return `${this._parent.path()}/webhooks`;
  }
  /**
   * Returns the list of all webhooks associated with the current account.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/webhooks
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMWebhookList> {
    const r = await this.rc.get<TMWebhookList>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns webhooks(s) with the specified id(s).
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/webhooks/{webhookId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<TMWebhookList> {
    if (this.webhookId === null) {
      throw new Error("webhookId must be specified.");
    }
    const r = await this.rc.get<TMWebhookList>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Deletes a webhook by ID.
   * HTTP Method: delete
   * Endpoint: /team-messaging/v1/webhooks/{webhookId}
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.webhookId === null) {
      throw new Error("webhookId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public suspend(): Suspend {
    return new Suspend(this);
  }

  public activate(): Activate {
    return new Activate(this);
  }
}
export default Index;
