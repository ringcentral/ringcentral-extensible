interface SmsRecipient {
  /**
   * ID of extension who is configured as a CQ's SMS recipient.
   */
  id?: string;

  /**
   * PIN of the extension who is configured as a CQ's SMS recipient.
   */
  extensionNumber?: string;

  /**
   * Type of the extension assigned as Sms recipient.
   * Example: User
   */
  extensionType?: "User" | "DigitalUser" | "ApplicationExtension";

  /**
   * Name (first + last) of the extension who is configured as a CQ's SMS recipient.
   */
  name?: string;

  /**
   * Indicates user's ability to become a thread assignee.
   */
  assignable?: boolean;

  /**
   * Indicates availability of a new MessageThreadsPaid feature status.
   */
  hasLicense?: boolean;
}

export default SmsRecipient;
