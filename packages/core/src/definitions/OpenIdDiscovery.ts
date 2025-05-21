/**
 * The OpenID Connect configuration document as defined by the
 * [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) specification
 */
interface OpenIdDiscovery {
  /**
   * An identifier of the ID token's issuer. This value is identical to the `iss` Claim value in ID Tokens
   * Required
   * Format: uri
   * Example: https://platform.ringcentral.com
   */
  issuer?: string;

  /**
   * URL of the OAuth 2.0 authorization endpoint
   * Required
   * Format: uri
   * Example: https://platform.ringcentral.com/restapi/oauth/authorize
   */
  authorization_endpoint?: string;

  /**
   * URL of the OAuth 2.0 token endpoint
   * Required
   * Format: uri
   * Example: https://platform.ringcentral.com/restapi/oauth/token
   */
  token_endpoint?: string;

  /**
   * URL of the OAuth 2.0 revocation endpoint as defined by [RFC-7009](https://datatracker.ietf.org/doc/html/rfc7009)
   * Required
   * Format: uri
   * Example: https://platform.ringcentral.com/restapi/oauth/revoke
   */
  revocation_endpoint?: string;

  /**
   * URL of the user info endpoint as defined by
   *  [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) specification
   * Required
   * Format: uri
   * Example: https://platform.ringcentral.com/restapi/oauth/userinfo
   */
  userinfo_endpoint?: string;

  /**
   * URL of JSON Web Key Set document that contains public key(s) to be used by the Relying Party
   *  to validate ID Token signatures
   * Required
   * Format: uri
   * Example: https://platform.ringcentral.com/restapi/oauth/jwks
   */
  jwks_uri?: string;

  /**
   * The list of the OAuth 2.0 scope values that this server supports
   * Required
   * Example: openid,email,profile
   */
  scopes_supported?: ("openid" | "email" | "profile")[];

  /**
   * The list of Client Authentication methods supported by the Token Endpoint
   * Required
   * Example: client_secret_basic
   */
  token_endpoint_auth_methods_supported?:
    ("client_secret_basic" | "client_secret_jwt" | "private_key_jwt")[];

  /**
   * The list of the OAuth 2.0 `response_type` values supported by the provider
   * Required
   * Example: code
   */
  response_types_supported?: ("code")[];

  /**
   * The list of the Subject Identifier types supported by the provider (only `public` is currently supported)
   * Required
   * Example: public
   */
  subject_types_supported?: ("public")[];

  /**
   * The list of the JWS signing algorithms (`alg` values) supported by the UserInfo Endpoint  to encode the Claims in a JWT
   * Required
   * Example: none
   */
  userinfo_signing_alg_values_supported?: ("none")[];

  /**
   * The list of the JWS signing algorithms (`alg` values) supported by the provider for the ID Token
   *  to encode the Claims in a JWT
   * Required
   * Example: RS256,HS256
   */
  id_token_signing_alg_values_supported?: ("RS256" | "HS256")[];

  /**
   * The list of the `display` parameter values (in OAuth 2.0 Authorization Endpoint) supported by the provider
   */
  display_values_supported?: ("page" | "popup" | "touch" | "mobile")[];

  /**
   * The list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply values for
   * Example: sub,iss,auth_time,exp
   */
  claims_supported?: (
    | "sub"
    | "iss"
    | "auth_time"
    | "aud"
    | "exp"
    | "iat"
    | "jti"
    | "nonce"
    | "account_id"
    | "email"
    | "email_verified"
    | "given_name"
    | "family_name"
  )[];

  /**
   * Language codes supported for the user interface, represented as language tags defined in
   *  [RFC-5646](https://datatracker.ietf.org/doc/html/rfc5646)
   * Example: en,en-US,en-GB,fr-CA
   */
  ui_locales_supported?: string[];

  /**
   * Boolean value specifying whether the provide supports use of the `claims` parameter
   */
  claims_parameter_supported?: boolean;

  /**
   * Boolean value specifying whether the provide supports use of the `request` parameter
   */
  request_parameter_supported?: boolean;

  /**
   * Boolean value specifying whether the provide supports use of the `request` parameter
   */
  request_uri_parameter_supported?: boolean;
}

export default OpenIdDiscovery;
