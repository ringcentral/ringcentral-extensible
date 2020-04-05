class RevokeTokenRequest
{
    /// <summary>
    /// </summary>
    client_assertion_type: string

    /// <summary>
    /// </summary>
    client_assertion: string

    /// <summary>
    /// Active access or refresh token to be revoked
    /// </summary>
    token: string
}

export default RevokeTokenRequest