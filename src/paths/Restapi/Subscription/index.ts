import Renew from './Renew'
import { RecordsCollectionResourceSubscriptionResponse, SubscriptionInfo, CreateSubscriptionRequest, ModifySubscriptionRequest, UpdateSubscriptionParameters } from '../../../definitions'
import Parent from '..'
import RestClient from '../../..'

class Subscription {
  rc: RestClient
  subscriptionId: string
  parent: Parent

  constructor(parent: Parent, subscriptionId: string) {
    this.parent = parent
    this.rc = parent.rc
    this.subscriptionId = subscriptionId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.subscriptionId) {
      return `${this.parent.path()}/subscription/${this.subscriptionId}`
    }

    return `${this.parent.path()}/subscription`
  }

  /**
   * Operation: Get Subscriptions
   * Http get /restapi/v1.0/subscription
   */
  async list(): Promise<RecordsCollectionResourceSubscriptionResponse> {
    return this.rc.get(this.path(false))
  }

  /**
   * Operation: Create Subscription
   * Http post /restapi/v1.0/subscription
   */
  async post(createSubscriptionRequest: CreateSubscriptionRequest): Promise<SubscriptionInfo> {
    return this.rc.post(this.path(false), createSubscriptionRequest)
  }

  /**
   * Operation: Get Subscription
   * Http get /restapi/v1.0/subscription/{subscriptionId}
   */
  async get(): Promise<SubscriptionInfo> {
    if (!this.subscriptionId) {
      throw new Error('subscriptionId must not be undefined')
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Renew Subscription / Update Event Filters
   * Http put /restapi/v1.0/subscription/{subscriptionId}
   */
  async put(modifySubscriptionRequest: ModifySubscriptionRequest, queryParams?: UpdateSubscriptionParameters): Promise<SubscriptionInfo> {
    if (!this.subscriptionId) {
      throw new Error('subscriptionId must not be undefined')
    }

    return this.rc.put(this.path(), modifySubscriptionRequest, queryParams)
  }

  /**
   * Operation: Cancel Subscription
   * Http delete /restapi/v1.0/subscription/{subscriptionId}
   */
  async delete(): Promise<string> {
    if (!this.subscriptionId) {
      throw new Error('subscriptionId must not be undefined')
    }

    return this.rc.delete(this.path())
  }

  renew(): Renew {
    return new Renew(this)
  }
}

export default Subscription
