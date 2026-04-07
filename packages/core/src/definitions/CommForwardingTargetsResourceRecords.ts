import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommDeviceResource from "./CommDeviceResource.js";
import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommIntegrationResource from "./CommIntegrationResource.js";

interface CommForwardingTargetsResourceRecords {
  /**
   * Ring target type
   * Example: PhoneNumberRingTarget
   */
  type?:
    | "CoworkerAppsRingTarget"
    | "CoworkerRingTarget"
    | "DeviceRingTarget"
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
   * Device name
   * Example: HP2
   */
  name?: string;

  /**
   */
  destination?: CommPhoneNumberResource;

  /**
   */
  integration?: CommIntegrationResource;
}

export default CommForwardingTargetsResourceRecords;
