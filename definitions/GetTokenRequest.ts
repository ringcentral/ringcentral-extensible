class GetTokenRequest
{
    /// <summary>
    /// Phone number linked to an account or extension in E.164 format with or without leading '+' sign
    /// </summary>
    username: string

    /// <summary>
    /// User's password
    /// </summary>
    password: string

    /// <summary>
    /// Optional. Extension short number. If company number is specified as a username, and extension is not specified, the server will attempt to authenticate client as main company administrator
    /// </summary>
    extension: string

    /// <summary>
    /// Grant type
    /// Default: password
    /// Enum: authorization_code, password, refresh_token, client_credentials
    /// </summary>
    grant_type: string

    /// <summary>
    /// Authorization code
    /// </summary>
    code: string

    /// <summary>
    /// This is a callback URI which determines where the response is sent. The value of this parameter must exactly match one of the URIs you have provided for your app upon registration
    /// </summary>
    redirect_uri: string

    /// <summary>
    /// Access token lifetime in seconds
    /// Maximum: 3600
    /// Minimum: 600
    /// Default: 3600
    /// </summary>
    access_token_ttl: number

    /// <summary>
    /// Refresh token lifetime in seconds
    /// Maximum: 604800
    /// Default: 604800
    /// </summary>
    refresh_token_ttl: number

    /// <summary>
    /// List of API permissions to be used with access token. Can be omitted when requesting all permissions defined during the application registration phase
    /// </summary>
    scope: string

    /// <summary>
    /// Previously issued refresh token. This is the only formData field used for the Refresh Token Flow.
    /// </summary>
    refresh_token: string

    /// <summary>
    /// The unique identifier of a client application. If not specified, the previously specified or auto generated value is used by default
    /// </summary>
    endpoint_id: string

    /// <summary>
    /// </summary>
    pin: string

    /// <summary>
    /// </summary>
    client_id: string

    /// <summary>
    /// </summary>
    account_id: string

    /// <summary>
    /// </summary>
    partner_account_id: string

    /// <summary>
    /// </summary>
    client_assertion_type: string

    /// <summary>
    /// </summary>
    client_assertion: string

    /// <summary>
    /// </summary>
    assertion: string

    /// <summary>
    /// </summary>
    brand_id: string

    /// <summary>
    /// </summary>
    code_verifier: string
}

export default GetTokenRequest