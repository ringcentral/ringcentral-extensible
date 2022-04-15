import { RestRequestConfig } from '../../../../Rest';
import { GetServiceInfoResponse } from '../../../../definitions';
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
  async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetServiceInfoResponse> {
    const r = await this.rc.get<GetServiceInfoResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
