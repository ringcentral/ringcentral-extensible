class MeetingRecordingInfo {
  /**
   */
  id?: string;

  /**
   */
  contentDownloadUri?: string;

  /**
   */
  contentType?: 'video/mp4' | 'audio/m4a' | 'text/vtt';

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
