interface SessionInfoResponse {
  /**
   * Identifier (key) of a client application
   * Required
   */
  client_id?: string;

  /**
   * List of permissions (space separated) granted to the application with this token
   * Example: AccountInfo CallLog ExtensionInfo Messages SMS
   */
  scope?: string;

  /**
   * Subject of the token (extension ID or the owner)
   */
  sub?: string;

  /**
   * RC account ID associated with the token
   */
  account_id?: string;

  /**
   * Remaining time in seconds until session expiration due to absolute timeout
   * Format: int32
   */
  session_expires_in?: number;

  /**
   * Absolute value of session expiration time in ISO date formatted string
   * Format: date-time
   * Example: 2023-04-01T12:00:01Z
   */
  session_expiration_time?: string;

  /**
   * OAuth session ID
   * Required
   */
  session_id?: string;

  /**
   * Nominal value of session idle timeout in seconds
   * Format: int32
   */
  session_idle_timeout?: number;
}

export default SessionInfoResponse;
