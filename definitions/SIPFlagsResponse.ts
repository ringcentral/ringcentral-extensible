class SIPFlagsResponse
{
    /**
     * If 'True' VoIP calling feature is enabled
     * Enum: True, False
     */
    voipFeatureEnabled: string

    /**
     * If 'True' the request is sent from IP address of a country blocked for VoIP calling
     * Enum: True, False
     */
    voipCountryBlocked: string

    /**
     * If 'True' outbound calls are enabled
     * Enum: True, False
     */
    outboundCallsEnabled: string

    /**
     */
    dscpEnabled: boolean

    /**
     */
    dscpSignaling: number

    /**
     */
    dscpVoice: number

    /**
     */
    dscpVideo: number
}

export default SIPFlagsResponse