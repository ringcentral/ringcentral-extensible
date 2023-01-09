interface AuthorizeRequest {
  /**
   * Determines authorization flow:
 *  - **code** - Authorization Code,
 *  - **token** - Implicit
   * Required
   */
  response_type?: ('code' | 'token');

  /**
   * This is a callback URI which determines where the response
 *  is sent. The value of this parameter must exactly match one of
 *  the URIs you have provided for your app upon registration
   * Required
   * Format: uri
   */
  redirect_uri?: string;

  /**
   * Identifier (key) of a client application
   * Required
   */
  client_id?: string;

  /**
   * Client state. Returned back to the client at the end of the flow
   */
  state?: string;

  /**
   * Brand identifier. If it is not provided in request,
 *  server will try to determine brand from client app profile. The
 *  default value is `1210` - RingCentral US brand ID
   * Default: 1210
   */
  brand_id?: string;

  /**
   * Style of login form. The default value is 'page'. The
 *  'popup' and 'touch' values are featured for mobile applications
   * Default: page
   */
  display?: ('page' | 'popup' | 'touch' | 'mobile');

  /**
   * Specifies which login form will be displayed. Space-separated
 *  set of the following values:
 *  - **login** - RingCentral native login form,
 *  - **sso** - Single Sign-On login form,
 *  - **consent** - form to show the requested scope and prompt user for consent.
 *
 *  Either `login` or `sso` (or both) must be specified. The default
 *  value is `login sso`
   * Default: login sso
   */
  prompt?: string;

  /**
   * Locale code of a language. Overwrites 'Accept-Language' header value.
 *
 *  DEPRECATED: `ui_locales` parameter should be used instead
   * Example: en-US
   */
  localeId?: string;

  /**
   * Locale code of a language. Overwrites 'Accept-Language' header value and 'localeId' parameter value
   * Example: en-US
   */
  ui_locales?: string;

  /**
   * User interface options (space-separated)
   */
  ui_options?: string;

  /**
   * OAuth scope
   */
  scope?: string;

  /**
   */
  accept_language?: string;

  /**
   */
  request?: string;

  /**
   * Format: uri
   */
  request_uri?: string;

  /**
   */
  nonce?: string;

  /**
   */
  code_challenge?: string;

  /**
   */
  code_challenge_method?: ('plain' | 'S256');

  /**
   */
  discovery?: boolean;
}

export default AuthorizeRequest;
