interface CommRangeRequest {
  /**
   * Start date-time
   */
  startDateTime?: string;

  /**
   * End date-time
   * Required
   */
  endDateTime?: string;
}

export default CommRangeRequest;
