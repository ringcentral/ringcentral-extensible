class PartySuperviseRequest
{
    /// <summary>
    /// Supervising mode
    /// Required
    /// Enum: Listen
    /// </summary>
    mode: string

    /// <summary>
    /// Internal identifier of a supervisor's device
    /// Required
    /// </summary>
    supervisorDeviceId: string

    /// <summary>
    /// Mailbox ID of a user that will be monitored
    /// Required
    /// </summary>
    agentExtensionId: string
}

export default PartySuperviseRequest