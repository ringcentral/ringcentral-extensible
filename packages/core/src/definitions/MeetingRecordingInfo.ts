interface MeetingRecordingInfo {
  /**
   * Unique identifier of a meeting instance
   */
  uuid?: string;

  /**
   */
  id?: string;

  /**
   * Link for downloading the recorded file (mp4, mp3 audio and text/plain chat file)
   * Format: uri
   */
  contentDownloadUri?: string;

  /**
   */
  contentType?: 'video/mp4' | 'audio/m4a' | 'text/vtt';

  /**
   * Format: int32
   */
  size?: number;

  /**
   * Starting time of a recording
   * Format: date-time
   */
  startTime?: string;

  /**
   * Ending time of a recording
   * Format: date-time
   */
  endTime?: string;

  /**
   */
  status?: 'Completed' | 'Processing';
}

export default MeetingRecordingInfo;
