import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberTerminatingTargetResource {
  /**
   * Required
   */
  name?: string;

  /**
   * Terminating target type
   * Required
   * Example: PhoneNumberTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;

  /**
   * Required
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommPhoneNumberTerminatingTargetResource;
