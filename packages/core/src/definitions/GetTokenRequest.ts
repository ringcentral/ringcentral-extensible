interface GetTokenRequest {
  /**
   * For `password` grant type only. User login name: email or phone number in E.164 format
   */
  username?: string;

  /**
   * For `password` grant type only. User's password
   * Format: password
   */
  password?: string;

  /**
   * For `password` grant type only. Optional. Extension short number. If company number
   *  is specified as a username, and extension is not specified, the
   *  server will attempt to authenticate client as main company administrator
   *
   *  DEPRECATED: use extension number embedded into username string like `+16501234567*101`
   */
  extension?: string;

  /**
   * Grant type
   * Required
   */
  grant_type?:
    | 'authorization_code'
    | 'password'
    | 'refresh_token'
    | 'client_credentials'
    | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
    | 'urn:ietf:params:oauth:grant-type:device_code'
    | 'device_certificate'
    | 'partner_jwt'
    | 'guest'
    | 'personal_jwt'
    | 'otp'
    | 'ivr_pin';

  /**
   * For `authorization_code` grant type only. User's authorization code
   */
  code?: string;

  /**
   * For `authorization_code` grant type only. This is a callback URI which determines where the response
   *  is sent. The value of this parameter must exactly match one of
   *  the URIs you have provided for your app upon registration
   * Format: uri
   */
  redirect_uri?: string;

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
   * Maximum: 604800
   * Format: int32
   * Default: 604800
   */
  refresh_token_ttl?: number;

  /**
   * List of application permissions to be used with access token.
   *  By default, the scope includes all permissions configured during
   *  the application registration phase
   */
  scope?: string;

  /**
   * For `refresh_token` grant type only. Previously issued refresh token.
   */
  refresh_token?: string;

  /**
   * The unique identifier of a client application instance. If not
   *  specified, the derived or auto generated value will be used
   */
  endpoint_id?: string;

  /**
   */
  pin?: string;

  /**
   * OAuth client identifier (if not specified via `Authorization` header)
   */
  client_id?: string;

  /**
   */
  account_id?: string;

  /**
   */
  partner_account_id?: string;

  /**
   * Client assertion type
   */
  client_assertion_type?: string;

  /**
   * Client assertion
   */
  client_assertion?: string;

  /**
   * For `jwt_bearer` grant type only. Assertion
   */
  assertion?: string;

  /**
   */
  brand_id?: string;

  /**
   * PKCE code verifier
   */
  code_verifier?: string;

  /**
   */
  device_code?: string;

  /**
   * For `ivr_pin` grant type only. IVR pin.
   */
  ivr_pin?: string;
}

export default GetTokenRequest;
