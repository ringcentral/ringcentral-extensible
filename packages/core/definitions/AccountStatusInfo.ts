class AccountStatusInfo {
  /**
   * A free-form user comment, describing the status change reason
   */
  comment?: string;

  /**
   * Type of suspension
   */
  reason?: 'SuspendedVoluntarily' | 'SuspendedInvoluntarily' | 'UserResumed';

  /**
   * Date until which the account will get deleted. The default value is 30 days since current date
   */
  till?: string;
}

export default AccountStatusInfo;
