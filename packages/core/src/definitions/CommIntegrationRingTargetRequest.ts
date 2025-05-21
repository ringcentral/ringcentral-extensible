import CommIntegrationRequest from "./CommIntegrationRequest.js";

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
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  integration?: CommIntegrationRequest;
}

export default CommIntegrationRingTargetRequest;
