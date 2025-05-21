interface BaseTokenRequest {
  /**
   * The list of application permissions (OAuth scopes) requested.
   *  By default, it includes all permissions configured on
   *  the client application registration
   */
  scope?: string;

  /**
   * The unique identifier of a client application instance. If not
   *  specified, the derived or auto-generated value will be used
   */
  endpoint_id?: string;

  /**
   * Access token lifetime in seconds
   * Maximum: 3600
   * Minimum: 600
   * Format: int32
   * Default: 3600
   */
  access_token_ttl?: number;

  /**
   * Refresh token lifetime in seconds
   * Maximum: 2592000
   * Format: int32
   * Default: 604800
   */
  refresh_token_ttl?: number;
}

export default BaseTokenRequest;
