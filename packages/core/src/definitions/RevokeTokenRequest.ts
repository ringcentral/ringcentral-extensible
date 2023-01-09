interface RevokeTokenRequest {
  /**
   * Access or refresh token to be revoked
   * Required
   */
  token?: string;

  /**
   * Client assertion type
   */
  client_assertion_type?: string;

  /**
   * Client assertion
   */
  client_assertion?: string;
}

export default RevokeTokenRequest;
