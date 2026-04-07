/**
 * Assign a specific phone number
 */
interface PhoneNumberDefinitionDirectNumberType {
  /**
   * Phone number in e164 format
   * Required
   */
  phoneNumber?: string;

  /**
   * Type of a phone number
   */
  type?: "VoiceFax" | "VoiceOnly" | "FaxOnly";
}

export default PhoneNumberDefinitionDirectNumberType;
