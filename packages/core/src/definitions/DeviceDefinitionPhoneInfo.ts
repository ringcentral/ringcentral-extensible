interface DeviceDefinitionPhoneInfo {
  /**
   * Indicates if a number is toll or toll-free
   * Example: Toll
   */
  tollType?: "Toll" | "TollFree";

  /**
   * Preferred area code to use if numbers available
   * Example: 650
   */
  preferredAreaCode?: string;

  /**
   * Phone number ID
   */
  phoneNumber?: string;

  /**
   * Phone number reservation ID
   */
  reservationId?: string;

  /**
   * Phone number ID
   */
  phoneNumberId?: string;
}

export default DeviceDefinitionPhoneInfo;
