import SubscriptionInfo from '../../../../definitions/SubscriptionInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

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
   * Renews an existent subscription by posting request with an empty body.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}/renew
   * Rate Limit Group: Light
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
