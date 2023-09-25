import type ForwardAllCompanyCallsRequest from '../../../../definitions/ForwardAllCompanyCallsRequest';
import type ForwardAllCompanyCallsInfo from '../../../../definitions/ForwardAllCompanyCallsInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/forward-all-calls`;
  }

  /**
   * Returns information about *Forward All Company Calls* feature setting.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/forward-all-calls
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyAnsweringRules
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<ForwardAllCompanyCallsInfo> {
    const r = await this.rc.get<ForwardAllCompanyCallsInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates *Forward All Company Calls* feature setting.
   * HTTP Method: patch
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/forward-all-calls
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyAnsweringRules
   */
  public async patch(
    forwardAllCompanyCallsRequest: ForwardAllCompanyCallsRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ForwardAllCompanyCallsInfo> {
    const r = await this.rc.patch<ForwardAllCompanyCallsInfo>(
      this.path(),
      forwardAllCompanyCallsRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
