import CommDeviceRequest from "./CommDeviceRequest.js";
import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceRingTargetRequest {
  /**
   * Ring target type
   * Required
   * Example: DeviceRingTarget
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
  device?: CommDeviceRequest;

  /** */
  extension?: CommReferencedExtensionResource;
}

export default CommDeviceRingTargetRequest;
