import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommDeviceResource from "./CommDeviceResource.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import CommIntegrationResource from "./CommIntegrationResource.js";

interface CommRingGroupActionResourceTargets {
  /** */
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
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /** */
  extension?: CommReferencedExtensionResource;

  /** */
  device?: CommDeviceResource;

  /** */
  destination?: CommPhoneNumberResource;

  /** */
  integration?: CommIntegrationResource;
}

export default CommRingGroupActionResourceTargets;
