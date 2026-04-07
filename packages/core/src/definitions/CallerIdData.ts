import type CallerIdPhoneInfo from "./CallerIdPhoneInfo.js";

interface CallerIdData {
  /**
   * If 'PhoneNumber' value is specified, then a certain phone number
   *  is shown as a caller ID when using this telephony feature. If 'Blocked'
   *  value is specified, then a caller ID is hidden. The value 'CurrentLocation'
   *  can be specified for 'RingOut' feature only
   * Default: PhoneNumber
   */
  type?: "PhoneNumber" | "Blocked" | "CurrentLocation";

  /**
   */
  phoneInfo?: CallerIdPhoneInfo;
}

export default CallerIdData;
