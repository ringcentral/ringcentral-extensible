import CallLogResponse from "../../../../definitions/CallLogResponse.js";
import ListCompanyActiveCallsParameters from "../../../../definitions/ListCompanyActiveCallsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/active-calls`;
  }
  /**
   * Returns records of all calls that are in progress, ordered by start time in descending order.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/active-calls
   * Rate Limit Group: Heavy
   * App Permission: ReadCallLog
   * User Permission: ReadCallLog
   */
  public async get(
    queryParams?: ListCompanyActiveCallsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallLogResponse> {
    const r = await this.rc.get<CallLogResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
