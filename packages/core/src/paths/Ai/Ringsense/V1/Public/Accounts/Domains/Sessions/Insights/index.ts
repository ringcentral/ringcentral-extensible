import GetSessionInsightsResponse from "../../../../../../../../../definitions/GetSessionInsightsResponse.js";
import GetSessionInsightsParameters from "../../../../../../../../../definitions/GetSessionInsightsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/insights`;
  }
  /**
   * Returns the insights of all call recordings in a session
   * HTTP Method: get
   * Endpoint: /ai/ringsense/v1/public/accounts/{accountId}/domains/{domain}/sessions/{sourceSessionId}/insights
   * Rate Limit Group: Light
   * App Permission: RingSense
   */
  public async get(
    queryParams?: GetSessionInsightsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetSessionInsightsResponse> {
    const r = await this.rc.get<GetSessionInsightsResponse>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
