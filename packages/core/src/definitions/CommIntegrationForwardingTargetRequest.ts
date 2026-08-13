import type CommIntegrationRequest from "./CommIntegrationRequest.js";

interface CommIntegrationForwardingTargetRequest {
  /**
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
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   * Required
   */
  integration?: CommIntegrationRequest;
}

export default CommIntegrationForwardingTargetRequest;
