import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommFmcPhoneNumberRingTargetResource {
    /**
   */
  name?: string;

  /**
   * Ring target type
   * Required
   * Example: FmcPhoneNumberRingTarget
   */
  type?: ('AllDesktopRingTarget' | 'AllMobileRingTarget' | 'CoworkerRingTarget' | 'DeviceRingTarget' | 'HotdeskRingTarget' | 'ImsPhoneNumberRingTarget' | 'FmcPhoneNumberRingTarget' | 'IntegrationRingTarget' | 'PhoneNumberRingTarget');

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommFmcPhoneNumberRingTargetResource;
