interface AccountPhoneNumberInfoExtension {
  /**
   * Unique identifier of extension
   * Example: 1234567
   */
  id?: string;

  /**
   * Short number of an extension.
 *  Actual max length depends on system length limit for extension.
   * Example: 205
   */
  extensionNumber?: string;
}

export default AccountPhoneNumberInfoExtension;
