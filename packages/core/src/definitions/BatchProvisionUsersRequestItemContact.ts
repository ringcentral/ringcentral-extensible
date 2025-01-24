import type TransitionInfo from "./TransitionInfo";

interface BatchProvisionUsersRequestItemContact {
  /**
   * Given name
   * Example: John
   */
  firstName?: string;

  /**
   * Family name
   * Example: Smith
   */
  lastName?: string;

  /**
   * Contact email
   * Format: email
   * Example: john.smith@acme.com
   */
  email?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  mobileNumber?: string;

  /**
   * Indicates that contact email is enabled as login name for this user.
   *  Please note that email must be unique in this case.
   * Default: true
   */
  emailAsLoginName?: boolean;

  /** */
  transition?: TransitionInfo;
}

export default BatchProvisionUsersRequestItemContact;
