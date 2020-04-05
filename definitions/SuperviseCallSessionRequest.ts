class SuperviseCallSessionRequest
{
    /// <summary>
    /// Supervising mode
    /// Required
    /// Enum: Listen
    /// </summary>
    mode: string

    /// <summary>
    /// Internal identifier of a supervisor's device which will be used for call session monitoring
    /// Required
    /// </summary>
    supervisorDeviceId: string

    /// <summary>
    /// Extension number of the user that will be monitored
    /// </summary>
    agentExtensionNumber: string

    /// <summary>
    /// Extension identifier of the user that will be monitored
    /// </summary>
    agentExtensionId: string
}

export default SuperviseCallSessionRequest