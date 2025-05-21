import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommRingAlwaysGroupActionRequestTargets {
  /**
   * Ring target type
   * Example: AllMobileRingTarget
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
}

export default CommRingAlwaysGroupActionRequestTargets;
