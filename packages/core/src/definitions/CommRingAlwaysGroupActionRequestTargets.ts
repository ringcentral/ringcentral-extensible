import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

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
    | "FmcPhoneNumberRingTarget"
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget"
    | "CloudConnectorRingTarget";

  /**
   */
  extension?: CommReferencedExtensionResource;
}

export default CommRingAlwaysGroupActionRequestTargets;
