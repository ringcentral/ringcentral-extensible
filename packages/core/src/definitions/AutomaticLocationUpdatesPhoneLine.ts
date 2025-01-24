import type AutomaticLocationUpdatesPhoneNumberInfo from "./AutomaticLocationUpdatesPhoneNumberInfo";

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
