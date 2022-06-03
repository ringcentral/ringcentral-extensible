import GetServiceInfoResponse from '../../../../definitions/GetServiceInfoResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/service-info`;
  }

  /**
   * Returns the information about service plan, available features and limitations for a particular RingCentral customer account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/service-info
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadServicePlanInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GetServiceInfoResponse> {
    const r = await this.rc.get<GetServiceInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
