interface UserInfoResource {
  /**
   * Subject - the End-User internal identifier. Contains RingCentral user (extension) ID
   * Required
   * Example: 987654321
   */
  sub?: string;

  /**
   * End-User's preferred e-mail address
   * Format: email
   * Example: john.doe@acme.com
   */
  email?: string;

  /**
   * Indicates if the End-User's e-mail address has been verified
   */
  email_verified?: boolean;

  /**
   * The End-User's company account identifier. Contains RingCentral account ID
   */
  account_id?: string;

  /**
   * The last name of the End-User
   */
  family_name?: string;

  /**
   * The first name of the End-User
   */
  given_name?: string;
}

export default UserInfoResource;
