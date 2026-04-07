interface DeviceDefinitionPhoneInfo {
  /**
   * Indicates if a number is toll or toll-free
   * Example: Toll
   */
  tollType?: "Toll" | "TollFree";

  /**
   * Type of a phone number
   */
  type?: "VoiceFax" | "VoiceOnly" | "FaxOnly";

  /**
   * Preferred area code to use if the numbers are available
   * Example: 650
   */
  preferredAreaCode?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   * Phone number reservation ID. If provided, phoneNumber is also required
   */
  reservationId?: string;

  /**
   * Phone number identifier
   */
  phoneNumberId?: string;
}

export default DeviceDefinitionPhoneInfo;
