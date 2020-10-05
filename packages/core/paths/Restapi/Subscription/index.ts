import Renew from './Renew';
import {RestRequestConfig} from '../../../Rest';
import {
  RecordsCollectionResourceSubscriptionResponse,
  SubscriptionInfo,
  CreateSubscriptionRequest,
  ModifySubscriptionRequest,
  UpdateSubscriptionParameters,
} from '../../../definitions';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;
  subscriptionId: string | null;
  parent: Parent;

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
   * Operation: Get Subscription List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/subscription
   */
  async list(
    config?: RestRequestConfig
  ): Promise<RecordsCollectionResourceSubscriptionResponse> {
    const r = await this.rc.get<RecordsCollectionResourceSubscriptionResponse>(
      this.path(false),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Subscription
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/subscription
   */
  async post(
    createSubscriptionRequest: CreateSubscriptionRequest,
    config?: RestRequestConfig
  ): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(
      this.path(false),
      createSubscriptionRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Subscription
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/subscription/{subscriptionId}
   */
  async get(config?: RestRequestConfig): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }

    const r = await this.rc.get<SubscriptionInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Subscription
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/subscription/{subscriptionId}
   */
  async put(
    modifySubscriptionRequest: ModifySubscriptionRequest,
    queryParams?: UpdateSubscriptionParameters,
    config?: RestRequestConfig
  ): Promise<SubscriptionInfo> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }

    const r = await this.rc.put<SubscriptionInfo>(
      this.path(),
      modifySubscriptionRequest,
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Cancel Subscription
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/subscription/{subscriptionId}
   */
  async delete(config?: RestRequestConfig): Promise<string> {
    if (this.subscriptionId === null) {
      throw new Error('subscriptionId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), undefined, config);
    return r.data;
  }

  renew(): Renew {
    return new Renew(this);
  }
}

export default Index;
