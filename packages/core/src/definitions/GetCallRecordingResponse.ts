interface GetCallRecordingResponse {
  /**
   * Internal identifier of a call recording
   * Required
   */
  id?: string;

  /**
   * Link to a call recording binary content. Has to be retrieved with proper authorization
   *  (access token must be passed via `Authorization` header or query parameter)
   * Required
   * Format: uri
   */
  contentUri?: string;

  /**
   * Call recording file MIME format. Supported format is `audio/wav` and `audio/mpeg`
   * Required
   * Example: audio/wav
   */
  contentType?: string;

  /**
   * Recorded call duration
   * Required
   * Format: int32
   */
  duration?: number;
}

export default GetCallRecordingResponse;
