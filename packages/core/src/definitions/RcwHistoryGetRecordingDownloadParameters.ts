/**
 * Query parameters for operation rcwHistoryGetRecordingDownload
*/
interface RcwHistoryGetRecordingDownloadParameters {
  /**
   * Recording file media type. 'Video' implies multiplexed audio and video. 'Audio' refers to audio only.
   * Example: Video
   * Default: Video
   */
  recordingMediaType?: ('Video' | 'Audio');
}

export default RcwHistoryGetRecordingDownloadParameters;
