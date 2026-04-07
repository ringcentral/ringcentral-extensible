import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

/**
 * Coworker apps target
*/
interface CommCoworkerAppsRingTargetResource {
    /**
   * Ring target type
   * Required
   * Example: CoworkerAppsRingTarget
   */
  type?: ('CoworkerAppsRingTarget' | 'CoworkerRingTarget' | 'DeviceRingTarget' | 'ImsPhoneNumberRingTarget' | 'FmcPhoneNumberRingTarget' | 'IntegrationRingTarget' | 'PhoneNumberRingTarget');

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;
}

export default CommCoworkerAppsRingTargetResource;
