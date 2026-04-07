import type CommDeviceResource from "./CommDeviceResource.js";
import type CommIntegrationResource from "./CommIntegrationResource.js";
import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommRingGroupActionResourceTargets {
  /**
   */
  name?: string;

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
  device?: CommDeviceResource;

  /**
   */
  destination?: CommPhoneNumberResource;

  /**
   */
  integration?: CommIntegrationResource;
}

export default CommRingGroupActionResourceTargets;
