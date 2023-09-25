/**
 * Meeting host information
 */
interface HostInfoRequest {
  /**
   * Link to the meeting host resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an extension which is assigned to be a meeting host. The default value is currently logged-in extension identifier
   */
  id?: string;
}

export default HostInfoRequest;
