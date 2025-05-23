/**
 * For `NotActivated` extensions only. Welcome email settings
 */
interface UserTransitionInfo {
  /**
   * Specifies if a welcome/activation email is sent to the existing
   *  users during account confirmation
   */
  sendWelcomeEmailsToUsers?: boolean;

  /**
   * Specifies if a welcome/activation email is sent to the new users (within extension status changing from
   *  `Unassigned` to `NotActivated/Disabled`)
   */
  sendWelcomeEmail?: boolean;
}

export default UserTransitionInfo;
