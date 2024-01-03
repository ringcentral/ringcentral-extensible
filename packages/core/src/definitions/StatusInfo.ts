/**
 * Optional information to be used when account is moved to "Disabled" status
 */
interface StatusInfo {
  /**
   * Type of suspension, voluntarily or not
   * Example: CancelledVoluntarily
   */
  reason?: 'SuspendedVoluntarily' | 'SuspendedInvoluntarily' | 'CancelledVoluntarily' | 'CancelledInvoluntarily';

  /**
   * A meaningful description of the reason to change the status
   * Example: By customer request. Case ABC123
   */
  comment?: string;

  /**
   * Date after which the account will get deleted. Parameter can be used to overwrite default retention period
   * Format: date-time
   * Example: 2023-03-26T11:30:45.940Z
   */
  till?: string;
}

export default StatusInfo;
