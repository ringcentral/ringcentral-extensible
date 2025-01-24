import type CallerIdByFeatureInfoRequest from "./CallerIdByFeatureInfoRequest";

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
