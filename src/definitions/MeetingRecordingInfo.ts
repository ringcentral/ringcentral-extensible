class MeetingRecordingInfo
{
  /**
   */
  id?: string

  /**
   */
  contentDownloadUri?: string

  /**
   * Enum: video/mp4, audio/m4a, text/vtt
   */
  contentType?: string

  /**
   */
  size?: number

  /**
   * Starting time of a recording
   */
  startTime?: string

  /**
   * Ending time of a recording
   */
  endTime?: string

  /**
   * Enum: Completed, Processing
   */
  status?: string
}

export default MeetingRecordingInfo
