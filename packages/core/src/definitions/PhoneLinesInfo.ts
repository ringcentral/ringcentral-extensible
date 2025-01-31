import PhoneNumberInfoIntId from "./PhoneNumberInfoIntId.js";
import EmergencyAddress from "./EmergencyAddress.js";

interface PhoneLinesInfo {
  /**
   * Internal identifier of a phone line
   */
  id?: string;

  /**
   * The type of phone line
   */
  lineType?:
    | "Unknown"
    | "Standalone"
    | "StandaloneFree"
    | "BlaPrimary"
    | "BlaSecondary";

  /** */
  phoneInfo?: PhoneNumberInfoIntId;

  /** */
  emergencyAddress?: EmergencyAddress;
}

export default PhoneLinesInfo;
