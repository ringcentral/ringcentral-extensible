import {RestRequestConfig} from '../../../../Rest';
import {SubscriptionInfo} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
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
  async post(config?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
