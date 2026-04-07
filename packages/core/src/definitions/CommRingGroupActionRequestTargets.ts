import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommDeviceRequest from "./CommDeviceRequest.js";
import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommIntegrationRequest from "./CommIntegrationRequest.js";

interface CommRingGroupActionRequestTargets {
  /**
   * Ring target type
   * Example: PhoneNumberRingTarget
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
   */
  extension?: CommReferencedExtensionResource;

  /**
   */
  device?: CommDeviceRequest;

  /**
   */
  destination?: CommPhoneNumberResource;

  /**
   */
  integration?: CommIntegrationRequest;

  /**
   */
  name?: string;
}

export default CommRingGroupActionRequestTargets;
