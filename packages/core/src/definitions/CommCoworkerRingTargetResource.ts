import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Ring target
*/
interface CommCoworkerRingTargetResource {
    /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Ring target type
   * Required
   * Example: CoworkerRingTarget
   */
  type?: ('AllDesktopRingTarget' | 'AllMobileRingTarget' | 'CoworkerRingTarget' | 'DeviceRingTarget' | 'HotdeskRingTarget' | 'ImsPhoneNumberRingTarget' | 'FmcPhoneNumberRingTarget' | 'IntegrationRingTarget' | 'PhoneNumberRingTarget');

  /**
   */
  name?: string;
}

export default CommCoworkerRingTargetResource;
