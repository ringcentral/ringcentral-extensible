import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommFmcPhoneNumberForwardingTargetResource {
    /**
   * Ring target type
   * Required
   * Example: FmcPhoneNumberRingTarget
   */
  type?: ('CoworkerAppsRingTarget' | 'CoworkerRingTarget' | 'DeviceRingTarget' | 'ImsPhoneNumberRingTarget' | 'FmcPhoneNumberRingTarget' | 'IntegrationRingTarget' | 'PhoneNumberRingTarget');

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommFmcPhoneNumberForwardingTargetResource;
