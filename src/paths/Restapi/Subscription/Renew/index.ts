import SubscriptionInfo from '../../../../definitions/SubscriptionInfo'
import Parent from '..'
import RestClient from '../../../..'

class Renew {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/renew`
  }

  /**
   * Operation: Renew Subscription
   * Http post /restapi/v1.0/subscription/{subscriptionId}/renew
   */
  async post(): Promise<SubscriptionInfo> {
    return this.rc.post(this.path())
  }
}

export default Renew
