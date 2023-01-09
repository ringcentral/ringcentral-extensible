import ForwardAllCompanyCallsInfo from '../../../../definitions/ForwardAllCompanyCallsInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/forward-all-calls`;
  }

  /**
   * Returns information about *Forward All Company Calls* feature setting.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/forward-all-calls
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyAnsweringRules
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<ForwardAllCompanyCallsInfo> {
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
  async patch(forwardAllCompanyCallsInfo: ForwardAllCompanyCallsInfo, restRequestConfig?: RestRequestConfig): Promise<ForwardAllCompanyCallsInfo> {
    const r = await this.rc.patch<ForwardAllCompanyCallsInfo>(this.path(), forwardAllCompanyCallsInfo, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
