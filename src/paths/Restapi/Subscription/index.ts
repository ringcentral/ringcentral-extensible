import ModifySubscriptionRequest from '../../../definitions/ModifySubscriptionRequest'
import CreateSubscriptionRequest from '../../../definitions/CreateSubscriptionRequest'
import SubscriptionInfo from '../../../definitions/SubscriptionInfo'
import RecordsCollectionResourceSubscriptionResponse from '../../../definitions/RecordsCollectionResourceSubscriptionResponse'
import Parent from '..'
import RestClient from '../../..'

class Index {
  rc: RestClient
  subscriptionId: string
  parent: Parent

  constructor(parent: Parent, subscriptionId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.subscriptionId = subscriptionId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.subscriptionId != null) {
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
  async post(CreateSubscriptionRequest createSubscriptionRequest): Promise<SubscriptionInfo> {
    return this.rc.post(this.path(false), createSubscriptionRequest)
  }

  /**
   * Operation: Get Subscription
   * Http get /restapi/v1.0/subscription/{subscriptionId}
   */
  async get(): Promise<SubscriptionInfo> {
    if (!this.subscriptionId || this.subscriptionId === null) {
      throw new Error("subscriptionId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Renew Subscription / Update Event Filters
   * Http put /restapi/v1.0/subscription/{subscriptionId}
   */
  async put(ModifySubscriptionRequest modifySubscriptionRequest, UpdateSubscriptionParameters queryParams = null): Promise<SubscriptionInfo> {
    if (!this.subscriptionId || this.subscriptionId === null) {
      throw new Error("subscriptionId must not be undefined or null")
    }

    return this.rc.put(this.path(), modifySubscriptionRequest, queryParams)
  }

  /**
   * Operation: Cancel Subscription
   * Http delete /restapi/v1.0/subscription/{subscriptionId}
   */
  async delete(): Promise<string> {
    if (!this.subscriptionId || this.subscriptionId === null) {
      throw new Error("subscriptionId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }
}

export default Index
