import Renew from './Renew';
import {RestRequestConfig} from '../../../Rest';
import {
  RecordsCollectionResourceSubscriptionResponse,
  CreateSubscriptionRequest,
  SubscriptionInfo,
  ModifySubscriptionRequest,
} from '../../../definitions';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  subscriptionId: string | null;

  constructor(parent: Parent, subscriptionId: string | null = null) {
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
   * Returns the list of subscriptions created by the logged-in user for the currently authorized client application.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/subscription
   * Rate Limit Group: Light
   */
  async list(
    restRequestConfig?: RestRequestConfig
  ): Promise<RecordsCollectionResourceSubscriptionResponse> {
    const r = await this.rc.get<RecordsCollectionResourceSubscriptionResponse>(
      this.path(false),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Creates a new subscription.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/subscription
   * Rate Limit Group: Medium
   */
  async post(
    createSubscriptionRequest: CreateSubscriptionRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(
      this.path(false),
      createSubscriptionRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns the requested subscription by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
   * Rate Limit Group: Light
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }
    const r = await this.rc.get<SubscriptionInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates the existent subscription. The client application can extend/narrow the events for which it receives notifications within the frame of one subscription. If event filters are specified, calling this method modifies them for the existing subscription. The method also allows to set the subscription expiration time. If other than `events` and `expiresIn` parameters are passed in request they will be ignored. If the request body is empty then the specified subscription will be just renewed without any event filter change and with expiration time default.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
   * Rate Limit Group: Medium
   */
  async put(
    modifySubscriptionRequest: ModifySubscriptionRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }
    const r = await this.rc.put<SubscriptionInfo>(
      this.path(),
      modifySubscriptionRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Cancels the existent subscription.
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}
   * Rate Limit Group: Medium
   */
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }
    const r = await this.rc.delete<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  renew(): Renew {
    return new Renew(this);
  }
}
export default Index;
