interface TokenInfo {
  /**
   * OAuth access token to pass to subsequent API requests
   * Required
   * Example: U1BCMDFUMDRKV1MwMXxzLFSvXdw5PHMsVLEn_MrtcyxUsw
   */
  access_token?: string;

  /**
   * Issued access token TTL (time-to-live) in seconds
   * Required
   * Format: int32
   * Example: 7199
   */
  expires_in?: number;

  /**
   * OAuth refresh token (in case the one was issued)
   * Example: U1BCMDFUMDRKV1MwMXxzLFL4ec6A0XMsUv9wLriecyxS_w
   */
  refresh_token?: string;

  /**
   * Issued refresh token TTL (time-to-live) in seconds
   * Format: int32
   * Example: 604799
   */
  refresh_token_expires_in?: number;

  /**
   * List of permissions (space separated) granted to the application with this access token
   * Required
   * Example: AccountInfo CallLog ExtensionInfo Messages SMS
   */
  scope?: string;

  /**
   * Type of token. The only supported value is `bearer`. This value should be used when specifying access token in `Authorization` header of subsequent API requests
   * Required
   * Example: bearer
   */
  token_type?: string;

  /**
   * Token owner (extension/user) identifier
   * Example: 256440016
   */
  owner_id?: string;

  /**
   * Application instance identifier
   * Example: 8zXq6oaLT7WvwWITlGiA1A
   */
  endpoint_id?: string;

  /**
   * OIDC ID token (if OpenID Connect flow was activated during authorization)
   */
  id_token?: string;

  /**
   * OAuth session ID
   */
  session_id?: string;

  /**
   * Absolute value of session expiration time as an ISO timestamp
   * Format: date-time
   */
  session_expiration_time?: string;

  /**
   * Remaining time (in seconds) until session expiration due to the absolute timeout
   * Format: int32
   */
  session_expires_in?: number;

  /**
   * Nominal session idle timeout in seconds
   * Format: int32
   */
  session_idle_timeout?: number;
}

export default TokenInfo;
