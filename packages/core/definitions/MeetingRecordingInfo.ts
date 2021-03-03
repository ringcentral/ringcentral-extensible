class MeetingRecordingInfo {
  /**
   */
  id?: string;

  /**
   * Link for downloading the recorded file (mp4, mp3 audio and text/plain chat file)
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
