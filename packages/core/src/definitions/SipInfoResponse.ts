interface SipInfoResponse {
  /**
   * User credentials
   */
  username?: string;

  /**
   * User password. Not returned if SipDigest is not enabled
   * Format: password
   */
  password?: string;

  /**
   * Supported authorization types and their priority for clients
   */
  authorizationTypes?: ('SipDigest' | 'BearerToken')[];

  /**
   * Identifier for SIP authorization
   */
  authorizationId?: string;

  /**
   * SIP domain
   */
  domain?: string;

  /**
   * SIP outbound proxy server address (in the format <host:port>)
   */
  outboundProxy?: string;

  /**
   * SIP outbound IPv6 proxy server address (in the format <host:port>)
   */
  outboundProxyIPv6?: string;

  /**
   * SIP outbound proxy server backup address (in the format <host:port>)
   */
  outboundProxyBackup?: string;

  /**
   * SIP outbound IPv6 proxy server backup address (in the format <host:port>)
   */
  outboundProxyIPv6Backup?: string;

  /**
   * Preferred transport. SIP info will be returned for this transport if supported
   */
  transport?: 'UDP' | 'TCP' | 'TLS' | 'WSS';

  /**
   * For TLS transport only, Base64 encoded certificate
   */
  certificate?: string;

  /**
   * The interval in seconds after which the app must try to switch
   *  back to primary proxy if it was previously switched to backup. If this
   *  parameter is not returned, the app must stay on backup proxy and try to
   *  switch to primary proxy after the next SIP-provision call.
   * Format: int32
   */
  switchBackInterval?: number;

  /**
   * List of stun servers in the format <host:port>
   */
  stunServers?: string[];
}

export default SipInfoResponse;
