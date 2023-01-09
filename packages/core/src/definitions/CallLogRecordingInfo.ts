/**
 * Call recording data. Returned if the call was recorded
*/
interface CallLogRecordingInfo {
  /**
   * Internal identifier of the call recording
   */
  id?: string;

  /**
   * Link to the call recording metadata resource
   * Format: uri
   */
  uri?: string;

  /**
   * Indicates recording mode used
   */
  type?: ('Automatic' | 'OnDemand');

  /**
   * Link to a call recording binary content. Has to be retrieved with proper authorization
 *  (access token must be passed via `Authorization` header or query parameter)
   * Format: uri
   */
  contentUri?: string;
}

export default CallLogRecordingInfo;
