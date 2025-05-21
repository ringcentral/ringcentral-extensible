interface WsTokenResponse {
  /**
   * The websocket access token to be used when connecting to the Websocket Gateway.
   * Required
   */
  ws_access_token?: string;

  /**
   * The URI of RingCentral Websocket Gateway.
   * Format: uri
   */
  uri?: string;

  /**
   * Websocket access token TTL (time-to-live) in seconds
   * Required
   * Format: int32
   */
  expires_in?: number;
}

export default WsTokenResponse;
