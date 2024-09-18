/**
 * Status information (reason, comment). Returned for `Disabled` extensions only
 *
 */
interface ExtensionStatusInfo {
  /**
   * A free-form user comment, describing the status change reason
   */
  comment?: string;

  /**
   * Type of suspension
   */
  reason?: 'Voluntarily' | 'Involuntarily';
}

export default ExtensionStatusInfo;
