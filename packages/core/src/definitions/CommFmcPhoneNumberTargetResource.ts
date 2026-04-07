import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommFmcPhoneNumberTargetResource {
  /**
   * Required
   */
  destination?: CommPhoneNumberResource;

  /**
   * Ring target type
   * Example: FmcPhoneNumberRingTarget
   */
  type?: "FmcPhoneNumberRingTarget";
}

export default CommFmcPhoneNumberTargetResource;
