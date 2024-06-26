interface CallerIdPhoneInfo {
  /**
   * Internal identifier of a phone number
   */
  id?: string;

  /**
   * Link to a phone number resource
   * Format: uri
   */
  uri?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I)
   *  (with '+' sign) format
   */
  phoneNumber?: string;
}

export default CallerIdPhoneInfo;
