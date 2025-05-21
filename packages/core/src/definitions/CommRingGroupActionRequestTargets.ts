import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommDeviceRequest from "./CommDeviceRequest.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import CommIntegrationRequest from "./CommIntegrationRequest.js";

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
    | "IntegrationRingTarget"
    | "PhoneNumberRingTarget";

  /** */
  extension?: CommReferencedExtensionResource;

  /** */
  device?: CommDeviceRequest;

  /** */
  destination?: CommPhoneNumberResource;

  /** */
  integration?: CommIntegrationRequest;

  /** */
  name?: string;
}

export default CommRingGroupActionRequestTargets;
