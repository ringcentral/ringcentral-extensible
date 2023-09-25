/**
 * Call recording data. Returned if the call was recorded
 */
interface CallLogRecordingInfo {
  /**
   * Internal identifier of the call recording
   * Required
   */
  id?: string;

  /**
   * Link to the call recording metadata resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * Indicates recording mode used
   * Required
   */
  type?: 'Automatic' | 'OnDemand';

  /**
   * Link to a call recording binary content. Has to be retrieved with proper authorization
   *  (access token must be passed via `Authorization` header or query parameter)
   * Required
   * Format: uri
   */
  contentUri?: string;
}

export default CallLogRecordingInfo;
