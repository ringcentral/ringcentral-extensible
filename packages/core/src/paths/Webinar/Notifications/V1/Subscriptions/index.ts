import Renew from "./Renew/index";
import UpdateSubscriptionRequest from "../../../../../definitions/UpdateSubscriptionRequest";
import SubscriptionInfo from "../../../../../definitions/SubscriptionInfo";
import CreateWebhookSubscriptionRequest from "../../../../../definitions/CreateWebhookSubscriptionRequest";
import SubscriptionListResource from "../../../../../definitions/SubscriptionListResource";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public subscriptionId: string | null;

  public constructor(
    _parent: ParentInterface,
    subscriptionId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.subscriptionId = subscriptionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.subscriptionId !== null) {
      return `${this._parent.path()}/subscriptions/${this.subscriptionId}`;
    }
    return `${this._parent.path()}/subscriptions`;
  }
  /**
   * Returns a list of webinar subscriptions created by the user for the current authorized client application.
   * HTTP Method: get
   * Endpoint: /webinar/notifications/v1/subscriptions
   * Rate Limit Group: Light
   */
  public async list(
    restRequestConfig?: RestRequestConfig,
  ): Promise<SubscriptionListResource> {
    const r = await this.rc.get<SubscriptionListResource>(
      this.path(false),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates a new webinar subscription for the current authorized user / client application.
   * HTTP Method: post
   * Endpoint: /webinar/notifications/v1/subscriptions
   * Rate Limit Group: Medium
   */
  public async post(
    createWebhookSubscriptionRequest: CreateWebhookSubscriptionRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(
      this.path(false),
      createWebhookSubscriptionRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the webinar subscription by ID
   * HTTP Method: get
   * Endpoint: /webinar/notifications/v1/subscriptions/{subscriptionId}
   * Rate Limit Group: Light
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error("subscriptionId must be specified.");
    }
    const r = await this.rc.get<SubscriptionInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the existing subscription. The client application can extend/narrow
   * the list of events for which it receives notifications within this subscription.
   * If event filters are specified, calling this method modifies them for the
   * existing subscription. The method also allows setting the subscription expiration time.
   * If other than `events` and `expiresIn` parameters are passed in the request they will be ignored.
   * If the request body is empty then the specified subscription will be just renewed without any
   * event filter modifications and with default expiration time.
   *
   * HTTP Method: put
   * Endpoint: /webinar/notifications/v1/subscriptions/{subscriptionId}
   * Rate Limit Group: Medium
   */
  public async put(
    updateSubscriptionRequest: UpdateSubscriptionRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error("subscriptionId must be specified.");
    }
    const r = await this.rc.put<SubscriptionInfo>(
      this.path(),
      updateSubscriptionRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Cancels the existing webinar subscription.
   * HTTP Method: delete
   * Endpoint: /webinar/notifications/v1/subscriptions/{subscriptionId}
   * Rate Limit Group: Medium
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.subscriptionId === null) {
      throw new Error("subscriptionId must be specified.");
    }
    const r = await this.rc.delete<string>(
      this.path(),
      {},
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public renew(): Renew {
    return new Renew(this);
  }
}
export default Index;
