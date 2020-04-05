class SuperviseCallSessionRequest
{
    /**
     * Supervising mode
     * Required
     * Enum: Listen
     */
    mode: string

    /**
     * Internal identifier of a supervisor's device which will be used for call session monitoring
     * Required
     */
    supervisorDeviceId: string

    /**
     * Extension number of the user that will be monitored
     */
    agentExtensionNumber: string

    /**
     * Extension identifier of the user that will be monitored
     */
    agentExtensionId: string
}

export default SuperviseCallSessionRequest