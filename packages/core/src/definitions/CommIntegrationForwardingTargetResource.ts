import CommIntegrationResource from "./CommIntegrationResource.js";

interface CommIntegrationForwardingTargetResource {
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
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
    | "ImsPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /**
   * Required
   */
  integration?: CommIntegrationResource;
}

export default CommIntegrationForwardingTargetResource;
