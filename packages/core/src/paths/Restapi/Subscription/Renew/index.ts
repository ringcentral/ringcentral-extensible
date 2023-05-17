import SubscriptionInfo from '../../../../definitions/SubscriptionInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/renew`;
  }

  /**
   * Renews the existing subscription (this request comes with empty body).
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/subscription/{subscriptionId}/renew
   * Rate Limit Group: Light
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
