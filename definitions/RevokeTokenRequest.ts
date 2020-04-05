class RevokeTokenRequest
{
    /**
     */
    client_assertion_type: string

    /**
     */
    client_assertion: string

    /**
     * Active access or refresh token to be revoked
     */
    token: string
}

export default RevokeTokenRequest