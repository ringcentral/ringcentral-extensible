class ExtensionStatusInfo {
  /**
   * A free-form user comment, describing the status change reason
   */
  comment?: string

  /**
   * Type of suspension
   */
  reason?: ('Voluntarily' | 'Involuntarily' | 'SuspendedVoluntarily' | 'SuspendedVoluntarily2')
}

export default ExtensionStatusInfo
