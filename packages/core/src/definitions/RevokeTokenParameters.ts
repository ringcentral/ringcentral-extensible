/**
 * Query parameters for operation revokeToken
 */
interface RevokeTokenParameters {
  /**
   * Access or refresh token to be revoked (along with the entire OAuth session)
   */
  token?: string;
}

export default RevokeTokenParameters;
