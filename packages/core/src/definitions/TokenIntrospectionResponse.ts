interface TokenIntrospectionResponse {
  /**
   * Is presented token valid and active
   * Required
   * Example: true
   */
  active?: boolean;

  /**
   * List of permissions (space separated) granted to the application with this token
   * Example: AccountInfo CallLog ExtensionInfo Messages SMS
   */
  scope?: string;

  /**
   * Identifier (key) of a client application
   */
  client_id?: string;

  /**
   * Type of token. The only supported value is `bearer`
   * Example: bearer
   */
  token_type?: string;

  /**
   * Timestamp indicating when this token will expire in seconds since January 1 1970 UTC
   * Format: int64
   * Example: 1706715293
   */
  exp?: number;

  /**
   * Timestamp indicating when this token was originally issued in seconds since January 1 1970 UTC
   * Format: int64
   * Example: 1706711693
   */
  iat?: number;

  /**
   * Subject of the token (extension ID or the owner)
   */
  sub?: string;

  /**
   * RC account ID associated with the token
   */
  account_id?: string;

  /**
   * OAuth session ID associated with the token
   */
  session_id?: string;
}

export default TokenIntrospectionResponse;
