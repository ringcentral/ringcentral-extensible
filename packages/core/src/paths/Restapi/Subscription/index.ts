import Renew from './Renew';
import UpdateSubscriptionRequest from '../../../definitions/UpdateSubscriptionRequest';
import SubscriptionInfo from '../../../definitions/SubscriptionInfo';
import CreateSubscriptionRequest from '../../../definitions/CreateSubscriptionRequest';
import SubscriptionListResource from '../../../definitions/SubscriptionListResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  subscriptionId: string | null;

  constructor(parent: ParentInterface, subscriptionId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.subscriptionId = subscriptionId;
  }

  path(withParameter = true): string {
    if (withParameter && this.subscriptionId !== null) {
      return `${this.parent.path()}/subscription/${this.subscriptionId}`;
    }
    return `${this.parent.path()}/subscription`;
  }

  /**
   * Returns a list of subscriptions created by the user for the current authorized client application.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/subscription
   * Rate Limit Group: Light
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<SubscriptionListResource> {
    const r = await this.rc.get<SubscriptionListResource>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new subscription for the current authorized user / client application.
 * The number of subscriptions per user extension is limited to 20.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/subscription
   * Rate Limit Group: Medium
   */
  async post(createSubscriptionRequest: CreateSubscriptionRequest, restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(this.path(false), createSubscriptionRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the existing subscription by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
   * Rate Limit Group: Light
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }
    const r = await this.rc.get<SubscriptionInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the existing subscription. The client application can extend/narrow
 * the list of events for which it receives notifications within this subscription.
 * If event filters are specified, calling this method modifies them for the
 * existing subscription. The method also allows to set the subscription expiration time.
 * If other than `events` and `expiresIn` parameters are passed in the request they will be ignored.
 * If the request body is empty then the specified subscription will be just renewed without any
 * event filter modifications and with default expiration time.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
   * Rate Limit Group: Medium
   */
  async put(updateSubscriptionRequest: UpdateSubscriptionRequest, restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }
    const r = await this.rc.put<SubscriptionInfo>(this.path(), updateSubscriptionRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Cancels the existing subscription.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
   * Rate Limit Group: Medium
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  renew(): Renew {
    return new Renew(this);
  }
}
export default Index;
