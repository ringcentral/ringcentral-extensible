interface AdgPhoneNumberResource {
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
  usageType?: ('MobileNumber' | 'ContactNumber' | 'DirectNumber' | 'ForwardedNumber' | 'PartnerBusinessMobileNumber');

  /**
   * Specifies if a phone number should be hidden or not
   */
  hidden?: boolean;

  /**
   * Specifies if the number is primary, i.e. displayed as 'main number' and called by default
   */
  primary?: boolean;

  /**
   * Phone number in E.164 format
   * Example: +12056812029
   */
  e164?: string;

  /**
   * Formatted phone number
   * Example: +1 (205) 681-2029
   */
  formatted?: string;

  /**
   * SMS availability status of a phone number
   */
  smsAvailabilityStatus?: ('Active' | 'Inactive' | 'Disabled' | 'Banned' | 'Suspended' | 'Deprovisioning' | 'InboundOnly' | 'Unknown');

  /**
   * SMS campaign identifier
   */
  smsCampaignId?: string;
}

export default AdgPhoneNumberResource;
