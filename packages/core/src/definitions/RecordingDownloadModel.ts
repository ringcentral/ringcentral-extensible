interface RecordingDownloadModel {
  /**
   * Download URI (available only for webinar host or admin)
   * Required
   * Format: uri
   */
  downloadUri?: string;

  /**
   * MIME type of the file to download.
   * Required
   * Default: video/mp4
   */
  downloadContentType?: ('video/mp4' | 'audio/m4a');

  /**
   * Download file size in bytes
   * Required
   * Format: int64
   * Example: 20821092300
   */
  downloadSize?: number;
}

export default RecordingDownloadModel;
