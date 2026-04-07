import type CommIntegrationRequest from "./CommIntegrationRequest.js";

interface CommIntegrationRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: IntegrationRingTarget
   */
  type?:
    | "AllDesktopRingTarget"
    | "AllMobileRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "HotdeskRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  integration?: CommIntegrationRequest;
}

export default CommIntegrationRingTargetRequest;
