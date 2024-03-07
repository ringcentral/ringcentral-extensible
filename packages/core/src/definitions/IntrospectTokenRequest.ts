/**
 * Request body for operation introspectToken
 */
interface IntrospectTokenRequest {
  /**
   * OAuth token
   */
  token?: string;

  /**
   */
  scope?: string;
}

export default IntrospectTokenRequest;
