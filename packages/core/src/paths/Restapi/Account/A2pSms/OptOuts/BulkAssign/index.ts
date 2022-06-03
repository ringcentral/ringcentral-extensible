import OptOutBulkAssignResponse from '../../../../../../definitions/OptOutBulkAssignResponse';
import OptOutBulkAssignRequest from '../../../../../../definitions/OptOutBulkAssignRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Adds multiple opt-outs and/or opt-ins for the specified sender number and a set of recipient numbers.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/opt-outs/bulk-assign
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async post(optOutBulkAssignRequest: OptOutBulkAssignRequest, restRequestConfig?: RestRequestConfig): Promise<OptOutBulkAssignResponse> {
    const r = await this.rc.post<OptOutBulkAssignResponse>(this.path(), optOutBulkAssignRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
