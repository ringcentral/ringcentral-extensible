class CallRecordingExtensionResource
{
    /**
     * Internal identifier of an extension
     */
    id?: string

    /**
     */
    uri?: string

    /**
     */
    extensionNumber?: string

    /**
     */
    type?: string

    /**
     * Direction of call
     * Enum: Outbound, Inbound, All
     */
    callDirection?: string
}

export default CallRecordingExtensionResource