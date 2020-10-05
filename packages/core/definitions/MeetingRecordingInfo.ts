class MeetingRecordingInfo {
  /**
   */
  id?: string;

  /**
   * Link for recording file download
   */
  contentDownloadUri?: string;

  /**
   */
  contentType?: 'video/mp4' | 'audio/m4a' | 'text/plain';

  /**
   */
  size?: number;

  /**
   * Starting time of a recording
   */
  startTime?: string;

  /**
   * Ending time of a recording
   */
  endTime?: string;

  /**
   */
  status?: 'Completed' | 'Processing';
}

export default MeetingRecordingInfo;
