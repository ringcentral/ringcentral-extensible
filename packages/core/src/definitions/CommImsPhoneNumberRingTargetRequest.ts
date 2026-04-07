import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommImsPhoneNumberRingTargetRequest {
    /**
   * Ring target type
   * Required
   * Example: ImsPhoneNumberRingTarget
   */
  type?: ('AllDesktopRingTarget' | 'AllMobileRingTarget' | 'CoworkerRingTarget' | 'DeviceRingTarget' | 'HotdeskRingTarget' | 'ImsPhoneNumberRingTarget' | 'FmcPhoneNumberRingTarget' | 'IntegrationRingTarget' | 'PhoneNumberRingTarget');

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;
}

export default CommImsPhoneNumberRingTargetRequest;
