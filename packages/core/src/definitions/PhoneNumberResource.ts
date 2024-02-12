interface PhoneNumberResource {
  /**
   * Example: +1 (205) 6812029
   */
  formattedPhoneNumber?: string;

  /**
   * Example: +12056812029
   */
  phoneNumber?: string;

  /**
   * Example: VoiceFax
   */
  type?: string;

  /**
   * Custom user name of a phone number, if any
   * Example: Boss
   */
  label?: string;

  /**
   * Usage type of phone number
   * Example: DirectNumber
   */
  usageType?: 'MobileNumber' | 'ContactNumber' | 'DirectNumber' | 'ForwardedNumber';

  /**
   * Specifies if a phone number should be hidden or not
   */
  hidden?: boolean;

  /**
   * Specifies if the number is primary, i.e. displayed as 'main number' and called by default
   */
  primary?: boolean;
}

export default PhoneNumberResource;
