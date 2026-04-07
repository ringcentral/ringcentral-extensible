import CommIntegrationResource from "./CommIntegrationResource.js";

interface CommIntegrationForwardingTargetResource {
  /**
   * Ring target type
   * Required
   * Example: IntegrationRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  integration?: CommIntegrationResource;
}

export default CommIntegrationForwardingTargetResource;
