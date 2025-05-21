/**
 * Query parameters for operation revokeToken
 */
interface RevokeTokenParameters {
  /**
   * Access or refresh token to be revoked (along with the entire OAuth session).
   *
   *  Note: it is recommended to pass token via request body attribute
   */
  token?: string;
}

export default RevokeTokenParameters;
