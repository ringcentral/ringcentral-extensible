class SIPInfoResponse
{
    /// <summary>
    /// User credentials
    /// </summary>
    username: string

    /// <summary>
    /// User password
    /// </summary>
    password: string

    /// <summary>
    /// Identifier for SIP authorization
    /// </summary>
    authorizationId: string

    /// <summary>
    /// SIP domain
    /// </summary>
    domain: string

    /// <summary>
    /// SIP outbound proxy
    /// </summary>
    outboundProxy: string

    /// <summary>
    /// Preferred transport. SIP info will be returned for this transport if supported
    /// Enum: UDP, TCP, TLS, WS, WSS
    /// </summary>
    transport: string

    /// <summary>
    /// For TLS transport only Base64 encoded certificate
    /// </summary>
    certificate: string

    /// <summary>
    /// The interval in seconds after which the app must try to switch back to primary proxy if it was previously switched to backup. If this parameter is not returned, the app must stay on backup proxy and try to switch to primary proxy after the next SIP-provision call.
    /// </summary>
    switchBackInterval: number
}

export default SIPInfoResponse