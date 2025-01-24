interface BaseTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?:
    | "authorization_code"
    | "password"
    | "refresh_token"
    | "client_credentials"
    | "urn:ietf:params:oauth:grant-type:jwt-bearer"
    | "urn:ietf:params:oauth:grant-type:device_code"
    | "device_certificate"
    | "partner_jwt"
    | "guest"
    | "personal_jwt"
    | "otp"
    | "ivr_pin";

  /**
   * The list of application permissions (OAuth scopes) requested.
   *  By default, it includes all permissions configured on
   *  the client application registration
   */
  scope?: string;

  /**
   * The registered identifier of a client application.
   *  Used to identify a client ONLY if the client authentication is not required and
   *  corresponding credentials are not provided with this request
   * Example: AZwEVwGEcfGet2PCouA7K6
   */
  client_id?: string;

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
