/**
 * Optional information to be used when account is moved to "Disabled" status
 */
interface AccountStatusInfo {
  /**
   * Type of suspension, voluntarily or not
   * Example: CancelledVoluntarily
   */
  reason?:
    | "SuspendedVoluntarily"
    | "SuspendedInvoluntarily"
    | "CancelledVoluntarily"
    | "CancelledInvoluntarily";

  /**
   * A meaningful description of the reason to change the status
   * Example: By customer request. Case ABC123
   */
  comment?: string;

  /**
   * Date after which the disabled account will get deleted.
   *  Parameter can be used to overwrite default retention period
   *  (that is 30 days after disabling the account)
   * Format: date-time
   * Example: Sun Mar 26 2023 04:30:45 GMT-0700 (Pacific Daylight Time)
   */
  till?: string;
}

export default AccountStatusInfo;
