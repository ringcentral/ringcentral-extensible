class TokenInfo
{
    /// <summary>
    /// Access token to pass to subsequent API requests
    /// </summary>
    access_token: string

    /// <summary>
    /// Issued access token TTL (time to live), in seconds
    /// </summary>
    expires_in: number

    /// <summary>
    /// Refresh token to get a new access token, when the issued one expires
    /// </summary>
    refresh_token: string

    /// <summary>
    /// Issued refresh token TTL (time to live), in seconds
    /// </summary>
    refresh_token_expires_in: number

    /// <summary>
    /// List of permissions allowed with this access token, white-space separated
    /// </summary>
    scope: string

    /// <summary>
    /// Type of token. The only possible value supported is Bearer. This value should be used when specifying access token in `Authorization` header of subsequent API requests
    /// </summary>
    token_type: string

    /// <summary>
    /// Extension identifier
    /// </summary>
    owner_id: string

    /// <summary>
    /// Application instance identifier
    /// </summary>
    endpoint_id: string

    /// <summary>
    /// </summary>
    id_token: string
}

export default TokenInfo