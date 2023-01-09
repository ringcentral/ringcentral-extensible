interface GetCallRecordingResponse {
  /**
   * Internal identifier of a call recording
   */
  id?: string;

  /**
   * Link to a call recording binary content. Has to be retrieved with proper authorization
 *  (access token must be passed via `Authorization` header or query parameter)
   * Format: uri
   */
  contentUri?: string;

  /**
   * Call recording file format. Supported format is audio/x-wav
   */
  contentType?: string;

  /**
   * Recorded call duration
   * Format: int32
   */
  duration?: number;
}

export default GetCallRecordingResponse;
