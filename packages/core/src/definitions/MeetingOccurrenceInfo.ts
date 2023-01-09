interface MeetingOccurrenceInfo {
  /**
   * Identifier of a meeting occurrence
   */
  id?: string;

  /**
   * Starting time of a meeting occurrence
   * Format: date-time
   */
  startTime?: string;

  /**
   * Duration of a meeting occurrence
   * Format: int64
   */
  durationInMinutes?: number;

  /**
   * Status of a meeting occurrence
   */
  status?: string;
}

export default MeetingOccurrenceInfo;
