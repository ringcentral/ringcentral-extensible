/**
 * Status information (reason, comment). Returned for 'Disabled'
 * status only
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
  reason?: 'SuspendedVoluntarily' | 'SuspendedInvoluntarily' | 'CancelledVoluntarily' | 'CancelledInvoluntarily';

  /**
   * Date until which an account will get deleted. The default
   *  value is 30 days since the current date
   * Format: date-time
   */
  till?: string;
}

export default ExtensionStatusInfo;
