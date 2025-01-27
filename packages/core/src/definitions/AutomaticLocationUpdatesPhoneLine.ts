import AutomaticLocationUpdatesPhoneNumberInfo from "./AutomaticLocationUpdatesPhoneNumberInfo.js";

interface AutomaticLocationUpdatesPhoneLine {
  /** */
  lineType?:
    | "Unknown"
    | "Standalone"
    | "StandaloneFree"
    | "BlaPrimary"
    | "BlaSecondary"
    | "BLF";

  /** */
  phoneInfo?: AutomaticLocationUpdatesPhoneNumberInfo;
}

export default AutomaticLocationUpdatesPhoneLine;
