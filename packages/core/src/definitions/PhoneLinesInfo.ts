import PhoneNumberInfoIntId from "./PhoneNumberInfoIntId";
import EmergencyAddress from "./EmergencyAddress";

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
