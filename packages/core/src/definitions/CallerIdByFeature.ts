import type CallerIdData from "./CallerIdData.js";

/**
 * Caller ID settings by feature
 */
interface CallerIdByFeature {
  /**
   */
  feature?:
    | "RingOut"
    | "RingMe"
    | "CallFlip"
    | "FaxNumber"
    | "AdditionalSoftphone"
    | "Alternate"
    | "CommonPhone"
    | "MobileApp"
    | "Delegated"
    | "BusinessMobile";

  /**
   */
  callerId?: CallerIdData;
}

export default CallerIdByFeature;
