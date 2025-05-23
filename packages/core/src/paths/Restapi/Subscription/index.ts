import Renew from "./Renew/index.js";
import UpdateSubscriptionRequest from "../../../definitions/UpdateSubscriptionRequest.js";
import SubscriptionInfo from "../../../definitions/SubscriptionInfo.js";
import CreateSubscriptionRequest from "../../../definitions/CreateSubscriptionRequest.js";
import SubscriptionListResource from "../../../definitions/SubscriptionListResource.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../types.js";

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
      return `${this._parent.path()}/subscription/${this.subscriptionId}`;
    }
    return `${this._parent.path()}/subscription`;
  }
  /**
   * Returns a list of subscriptions created by the user for the current authorized client application.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/subscription
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
   * This API allows client applications to register a new subscription so that it
   * can be notified of events when they occur on the platform.
   *
   * A subscription relates to a set of events that a client application would like
   * to be informed of and the delivery channel by which they will be notified of
   * those events. How subscriptions are established depends upon the notification
   * channel the client application would like to use to receive the event
   * notification. For example, to create a webhook a developer would create a
   * subscription via a REST API call, while specifying a list of events or "event
   * filters" to be notified of, a transport type of `WebHook`, and the address or
   * URL to which they would like the webhook delivered.
   *
   * However, developers wishing to subscribe to a set of events via a WebSocket
   * channel, would first connect to the WebSocket gateway, and then issue their
   * subscription request over the WebSocket itself, as opposed to making a REST
   * API call to this endpoint.
   *
   * While the protocol for establishing a subscription may vary depending upon
   * the delivery channel for that subscription, the schemas used for representing
   * a subscription are the same across all delivery modes.
   *
   * Subscriptions are currently limited to 30 subscriptions per user/extension (for particular application).
   *
   * RingCentral currently supports the following delivery modes for event subscriptions:
   *
   * * [WebHook](https://developers.ringcentral.com/guide/notifications/webhooks/quick-start) - to receive event notifications as an HTTP POST to a given URL
   * * [WebSocket](https://developers.ringcentral.com/guide/notifications/websockets/quick-start) - to receive real-time events over a persistent WebSocket connection
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/subscription
   * Rate Limit Group: Medium
   */
  public async post(
    createSubscriptionRequest: CreateSubscriptionRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(
      this.path(false),
      createSubscriptionRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the existing subscription by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
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
   * Updates the existing subscription. The client application can extend or narrow
   * the list of events for which it receives notifications within the current subscription.
   * If event filters are specified, calling this method modifies them for the
   * existing subscription. The method also allows one to set an expiration time for the
   * subscription itself.
   *
   * If parameters other than `events` and `expiresIn` are specified in the request they will be ignored.
   * If the request body is empty then the specified subscription will be renewed without any
   * event filter modifications and using the default expiration time.
   *
   * If the request is sent with empty body, it just renews a subscription
   * (so it is an equivalent of the `POST /restapi/v1.0/subscription/{subscriptionId}/renew`).
   *
   * Please note that `WebSocket` subscriptions cannot be updated via HTTP interface.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
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
   * Cancels the existing subscription.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
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
