class SIPFlagsResponse
{
    /// <summary>
    /// If 'True' VoIP calling feature is enabled
    /// Enum: True, False
    /// </summary>
    voipFeatureEnabled: string

    /// <summary>
    /// If 'True' the request is sent from IP address of a country blocked for VoIP calling
    /// Enum: True, False
    /// </summary>
    voipCountryBlocked: string

    /// <summary>
    /// If 'True' outbound calls are enabled
    /// Enum: True, False
    /// </summary>
    outboundCallsEnabled: string

    /// <summary>
    /// </summary>
    dscpEnabled: boolean

    /// <summary>
    /// </summary>
    dscpSignaling: number

    /// <summary>
    /// </summary>
    dscpVoice: number

    /// <summary>
    /// </summary>
    dscpVideo: number
}

export default SIPFlagsResponse