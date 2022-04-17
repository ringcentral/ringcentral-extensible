class OutboundProxyInfo {
  /**
   * Geographical region
   * Example: APAC
   */
  region?: string;

  /**
   * SIP outbound proxy
   */
  proxy?: string;

  /**
   * SIP details for TLS (Transport Layer Security)
   */
  proxyTLS?: string;
}
export default OutboundProxyInfo;
