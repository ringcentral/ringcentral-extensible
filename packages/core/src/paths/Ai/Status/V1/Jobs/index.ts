import JobStatusResponse from '../../../../../definitions/JobStatusResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  jobId: string | null;

  constructor(parent: ParentInterface, jobId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.jobId = jobId;
  }

  path(withParameter = true): string {
    if (withParameter && this.jobId !== null) {
      return `${this.parent.path()}/jobs/${this.jobId}`;
    }
    return `${this.parent.path()}/jobs`;
  }

  /**
   * Returns async task status by Job ID
   * HTTP Method: get
   * Endpoint: /ai/status/v1/jobs/{jobId}
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<JobStatusResponse> {
    if (this.jobId === null) {
      throw new Error('jobId must be specified.');
    }
    const r = await this.rc.get<JobStatusResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
