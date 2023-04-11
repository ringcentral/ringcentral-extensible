interface JobStatusResponse {
  /**
   */
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
}

export default JobStatusResponse;
