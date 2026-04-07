interface InviteeContactModel {
  /**
   * First (given) name
   * Example: John
   */
  firstName?: string;

  /**
   * Last (family) name
   * Example: Doe
   */
  lastName?: string;

  /**
   * User's contact email
   * Format: email
   * Example: john.doe@example.com
   */
  email?: string;

  /**
   * Job title
   * Example: Product Manager
   */
  jobTitle?: string;
}

export default InviteeContactModel;
