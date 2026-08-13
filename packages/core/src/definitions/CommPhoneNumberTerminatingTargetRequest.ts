import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommPhoneNumberTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   * Example: PhoneNumberTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "CloudConnectorTerminatingTarget";

  /**
   * Phone number name
   */
  name?: string;

  /**
   * Required
   */
  destination?: CommPhoneNumberResource;

  /**
   * Required
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommPhoneNumberTerminatingTargetRequest;
