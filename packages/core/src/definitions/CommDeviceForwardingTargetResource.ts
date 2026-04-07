import CommDeviceResource from "./CommDeviceResource.js";
import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommDeviceForwardingTargetResource {
    /**
   * Ring target type
   * Required
   * Example: DeviceRingTarget
   */
  type?: ('CoworkerAppsRingTarget' | 'CoworkerRingTarget' | 'DeviceRingTarget' | 'ImsPhoneNumberRingTarget' | 'FmcPhoneNumberRingTarget' | 'IntegrationRingTarget' | 'PhoneNumberRingTarget');

  /**
   * Required
   */
  device?: CommDeviceResource;

  /**
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Device name
   * Example: HP2
   */
  name?: string;
}

export default CommDeviceForwardingTargetResource;
