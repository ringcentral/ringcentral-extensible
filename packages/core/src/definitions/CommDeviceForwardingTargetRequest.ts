import CommDeviceRequest from "./CommDeviceRequest.js";
import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceForwardingTargetRequest {
  /** */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: DeviceRingTarget
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
  device?: CommDeviceRequest;

  /** */
  extension?: CommReferencedExtensionResource;
}

export default CommDeviceForwardingTargetRequest;
