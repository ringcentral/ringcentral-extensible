import CommIntegrationResource from "./CommIntegrationResource.js";

interface CommIntegrationRingTargetResource {
  /**
   * Required
   */
  name?: string;

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
  integration?: CommIntegrationResource;
}

export default CommIntegrationRingTargetResource;
