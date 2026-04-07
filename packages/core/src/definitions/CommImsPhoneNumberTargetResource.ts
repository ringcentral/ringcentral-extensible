import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommImsPhoneNumberTargetResource {
  /**
   * Required
   */
  destination?: CommPhoneNumberResource;

  /**
   * Ring target type
   * Example: ImsPhoneNumberRingTarget
   */
  type?: "ImsPhoneNumberRingTarget";
}

export default CommImsPhoneNumberTargetResource;
