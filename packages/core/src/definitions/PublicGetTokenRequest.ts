/**
 * Token endpoint request parameters used in the "Refresh Token" flow
 * with the `refresh_token` grant type
 */
interface PublicGetTokenRequest {
  /**
   * The registered identifier of a client application.
   *  Used to identify a client ONLY if the client authentication is not required and
   *  corresponding credentials are not provided with this request
   * Example: AZwEVwGEcfGet2PCouA7K6
   */
  client_id?: string;

  /**
   * Client assertion type for the `client_secret_jwt` or `private_key_jwt` client authentication types,
   *  as defined by [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.2).
   *  This parameter is mandatory if the client authentication is required and a client decided to use one of these authentication types
   */
  client_assertion_type?:
    "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

  /**
   * Client assertion (JWT) for the `client_secret_jwt` or `private_key_jwt` client authentication types,
   *  as defined by [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.2).
   *  This parameter is mandatory if the client authentication is required and a client decided to use one of these authentication types
   */
  client_assertion?: string;

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

  /**
   * Grant type
   * Required
   */
  grant_type?:
    | "authorization_code"
    | "urn:ietf:params:oauth:grant-type:jwt-bearer"
    | "partner_jwt"
    | "refresh_token";

  /**
   * For `authorization_code` grant type only. User's authorization code
   * Required
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
   * For `authorization_code` grant type only.
   *  The code verifier as defined by  the PKCE specification -
   *  [RFC-7636 "Proof Key for Code Exchange by OAuth Public Clients"](https://datatracker.ietf.org/doc/html/rfc7636)
   */
  code_verifier?: string;

  /**
   * For `urn:ietf:params:oauth:grant-type:jwt-bearer` or `partner_jwt` grant types only.
   *  Authorization grant assertion (JWT)
   *  as defined by [RFC-7523](https://datatracker.ietf.org/doc/html/rfc7523#section-2.1).
   * Required
   */
  assertion?: string;

  /**
   * For `refresh_token` grant type only. Previously issued refresh token.
   * Required
   */
  refresh_token?: string;
}

export default PublicGetTokenRequest;
