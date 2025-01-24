interface MeetingInfo {
  /**
   * Unique identifier of a meeting instance
   */
  uuid?: string;

  /** */
  id?: string;

  /** */
  topic?: string;

  /**
   * Format: date-time
   */
  startTime?: string;
}

export default MeetingInfo;
