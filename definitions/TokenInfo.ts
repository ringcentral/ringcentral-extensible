class TokenInfo
{
    /**
     * Access token to pass to subsequent API requests
     */
    access_token: string

    /**
     * Issued access token TTL (time to live), in seconds
     */
    expires_in: number

    /**
     * Refresh token to get a new access token, when the issued one expires
     */
    refresh_token: string

    /**
     * Issued refresh token TTL (time to live), in seconds
     */
    refresh_token_expires_in: number

    /**
     * List of permissions allowed with this access token, white-space separated
     */
    scope: string

    /**
     * Type of token. The only possible value supported is Bearer. This value should be used when specifying access token in `Authorization` header of subsequent API requests
     */
    token_type: string

    /**
     * Extension identifier
     */
    owner_id: string

    /**
     * Application instance identifier
     */
    endpoint_id: string

    /**
     */
    id_token: string
}

export default TokenInfo