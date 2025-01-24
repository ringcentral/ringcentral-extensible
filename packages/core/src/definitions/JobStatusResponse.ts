import type JobStatusResponseResponse from "./JobStatusResponseResponse";

interface JobStatusResponse {
  /** */
  jobId?: string;

  /**
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Format: date-time
   */
  completionTime?: string;

  /**
   * Format: date-time
   */
  expirationTime?: string;

  /** */
  status?: "Success" | "Fail";

  /** */
  response?: JobStatusResponseResponse;
}

export default JobStatusResponse;
