import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberTargetResource {
  /**
   * Required
   */
  destination?: CommPhoneNumberResource;

  /**
   * Ring target type
   * Example: PhoneNumberRingTarget
   */
  type?: "PhoneNumberRingTarget";
}

export default CommPhoneNumberTargetResource;
