import CallerIdByFeatureInfo from "./CallerIdByFeatureInfo.js";

/**
 * Caller ID settings by feature
 */
interface CallerIdByFeature {
  /** */
  feature?:
    | "RingOut"
    | "RingMe"
    | "CallFlip"
    | "FaxNumber"
    | "AdditionalSoftphone"
    | "Alternate"
    | "CommonPhone"
    | "MobileApp"
    | "Delegated";

  /** */
  callerId?: CallerIdByFeatureInfo;
}

export default CallerIdByFeature;
