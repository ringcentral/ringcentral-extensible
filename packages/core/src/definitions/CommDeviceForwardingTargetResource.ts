import CommDeviceResource from "./CommDeviceResource.js";
import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceForwardingTargetResource {
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
  device?: CommDeviceResource;

  /** */
  extension?: CommReferencedExtensionResource;
}

export default CommDeviceForwardingTargetResource;
