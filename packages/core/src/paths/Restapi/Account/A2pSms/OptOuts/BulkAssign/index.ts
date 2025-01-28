import OptOutBulkAssignResponse from "../../../../../../definitions/OptOutBulkAssignResponse";
import OptOutBulkAssignRequest from "../../../../../../definitions/OptOutBulkAssignRequest";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/bulk-assign`;
  }
  /**
   * Adds multiple opt-outs and/or opt-ins for the specified sender number and a set of recipient numbers.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/opt-outs/bulk-assign
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  public async post(
    optOutBulkAssignRequest: OptOutBulkAssignRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<OptOutBulkAssignResponse> {
    const r = await this.rc.post<OptOutBulkAssignResponse>(
      this.path(),
      optOutBulkAssignRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
