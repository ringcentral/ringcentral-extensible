class AuthorizeRequest
{
    /// <summary>
    /// Determines authorization flow: **code** - Authorization Code, **token** - Implicit Grant
    /// Enum: code, token
    /// </summary>
    response_type: string

    /// <summary>
    /// This is a callback URI which determines where the response is sent. The value of this parameter must exactly match one of the URIs you have provided for your app upon registration
    /// </summary>
    redirect_uri: string

    /// <summary>
    /// Identifier (key) of a client application
    /// </summary>
    client_id: string

    /// <summary>
    /// Client state. Returned back to the client at the end of the flow
    /// </summary>
    state: string

    /// <summary>
    /// Brand identifier. If it is not provided in request, server will try to determine brand from client app profile. The default value is '1210' - RingCentral US
    /// </summary>
    brand_id: string

    /// <summary>
    /// Style of login form. The default value is 'page'. The 'popup' and 'touch' values are featured for mobile applications
    /// Enum: page, popup, touch, mobile
    /// </summary>
    display: string

    /// <summary>
    /// Specifies which login form will be displayed. Space-separated set of the following values: 'login' - official RingCentral login form, 'sso' - Single Sign-On login form, 'consent' - form to show the requested scope and prompt user for consent. Either 'login' or 'sso' (or both) must be specified. The default value is 'login&sso'
    /// Enum: login, sso, consent
    /// </summary>
    prompt: string

    /// <summary>
    /// Localization code of a language. Overwrites 'Accept-Language' header value
    /// </summary>
    localeId: string

    /// <summary>
    /// Localization code of a language. Overwrites 'localeId' parameter value
    /// </summary>
    ui_locales: string

    /// <summary>
    /// User interface options data
    /// Enum: hide_logo, hide_tos, hide_remember_me, external_popup, old_ui
    /// </summary>
    ui_options: string

    /// <summary>
    /// </summary>
    scope: string

    /// <summary>
    /// </summary>
    accept_language: string

    /// <summary>
    /// </summary>
    request: string

    /// <summary>
    /// </summary>
    request_uri: string

    /// <summary>
    /// </summary>
    nonce: string

    /// <summary>
    /// </summary>
    code_challenge: string

    /// <summary>
    /// </summary>
    code_challenge_method: string
}

export default AuthorizeRequest