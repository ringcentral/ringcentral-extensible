import JobStatusResponse from "../../../../../definitions/JobStatusResponse";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public jobId: string | null;

  public constructor(_parent: ParentInterface, jobId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.jobId = jobId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.jobId !== null) {
      return `${this._parent.path()}/jobs/${this.jobId}`;
    }
    return `${this._parent.path()}/jobs`;
  }
  /**
   * Returns async task status by Job ID
   * HTTP Method: get
   * Endpoint: /ai/status/v1/jobs/{jobId}
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<JobStatusResponse> {
    if (this.jobId === null) {
      throw new Error("jobId must be specified.");
    }
    const r = await this.rc.get<JobStatusResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
