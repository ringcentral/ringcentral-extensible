import RecordingInsights from "../../../../../../../../../definitions/RecordingInsights";
import GetRecordingInsightsParameters from "../../../../../../../../../definitions/GetRecordingInsightsParameters";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../../../types";

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
   * Returns the insights of a call recording
   * HTTP Method: get
   * Endpoint: /ai/ringsense/v1/public/accounts/{accountId}/domains/{domain}/records/{sourceRecordId}/insights
   * Rate Limit Group: Light
   * App Permission: RingSense
   */
  public async get(
    queryParams?: GetRecordingInsightsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RecordingInsights> {
    const r = await this.rc.get<RecordingInsights>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
