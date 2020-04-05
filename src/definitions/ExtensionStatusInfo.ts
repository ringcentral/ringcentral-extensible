class ExtensionStatusInfo
{
  /**
   * A free-form user comment, describing the status change reason
   */
  comment?: string

  /**
   * Type of suspension
   * Enum: Voluntarily, Involuntarily, SuspendedVoluntarily
   */
  reason?: string
}

export default ExtensionStatusInfo
