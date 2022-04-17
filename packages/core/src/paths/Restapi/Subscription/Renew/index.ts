import { RestRequestConfig } from '../../../../Rest';
import { SubscriptionInfo } from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

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
   * Renews an existent subscription by posting request with an empty body.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}/renew
   * Rate Limit Group: Light
   */
  async post(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
