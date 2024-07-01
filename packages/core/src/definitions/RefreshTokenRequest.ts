/**
 * Token endpoint request parameters used in the "Refresh Token" flow
 * with the `refresh_token` grant type
 *
 */
interface RefreshTokenRequest {
  /**
   * Grant type
   */
  grant_type?: 'refresh_token';

  /**
   * For `refresh_token` grant type only. Previously issued refresh token.
   * Required
   */
  refresh_token?: string;
}

export default RefreshTokenRequest;
