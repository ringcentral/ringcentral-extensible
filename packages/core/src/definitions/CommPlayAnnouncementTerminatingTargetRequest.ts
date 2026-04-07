import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommPlayAnnouncementTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   * Example: PlayAnnouncementTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";

  /**
   * Required
   */
  prompt?: CommTerminatingPromptResource;

  /**
   * Required
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommPlayAnnouncementTerminatingTargetRequest;
