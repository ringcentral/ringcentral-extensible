import SubscriptionInfo from '../../../../../../definitions/SubscriptionInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/renew`;
  }

  /**
   * Renews the existing webinar subscription.
   * HTTP Method: post
   * Endpoint: /webinar/notifications/v1/subscriptions/{subscriptionId}/renew
   * Rate Limit Group: Light
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
