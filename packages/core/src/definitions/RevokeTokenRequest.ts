/**
 * Request body for operation revokeToken
*/
class RevokeTokenRequest {
  /**
   */
  client_assertion_type?: string;

  /**
   */
  client_assertion?: string;

  /**
   * Active access or refresh token to be revoked
   * Required
   */
  token?: string;
}
export default RevokeTokenRequest;
