interface SIPInfoRequest {
  /**
   * Supported transport. SIP info will be returned for this transport if supported
   */
  transport?: "UDP" | "TCP" | "TLS" | "WSS";
}

export default SIPInfoRequest;
