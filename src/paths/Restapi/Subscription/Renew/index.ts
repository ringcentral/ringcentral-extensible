import {SubscriptionInfo} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class Renew {
  rc: RestClient;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/renew`;
  }

  /**
   * Operation: Renew Subscription
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/subscription/{subscriptionId}/renew
   */
  async post(): Promise<SubscriptionInfo> {
    const r = await this.rc.post(this.path());
    return r.data;
  }
}

export default Renew;
