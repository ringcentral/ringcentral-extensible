import CallerIdByFeatureInfoRequest from "./CallerIdByFeatureInfoRequest.js";

/**
 * Caller ID settings by feature
 */
interface CallerIdByFeatureRequest {
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
  callerId?: CallerIdByFeatureInfoRequest;
}

export default CallerIdByFeatureRequest;
