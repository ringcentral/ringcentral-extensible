class PartySuperviseRequest
{
  /**
   * Supervising mode
   * Required
   * Enum: Listen
   */
  mode?: string

  /**
   * Internal identifier of a supervisor's device
   * Required
   */
  supervisorDeviceId?: string

  /**
   * Mailbox ID of a user that will be monitored
   * Required
   */
  agentExtensionId?: string
}

export default PartySuperviseRequest
