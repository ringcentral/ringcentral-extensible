/**
 * Status information (reason, comment). Returned for 'Disabled' status only
*/
class ExtensionStatusInfo {
  /**
   * A free-form user comment, describing the status change reason
   */
  comment?: string;

  /**
   * Type of suspension
   */
  reason?: ('Voluntarily' | 'Involuntarily' | 'SuspendedVoluntarily');
}

export default ExtensionStatusInfo;
