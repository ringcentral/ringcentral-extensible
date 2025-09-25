import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommPlayAnnouncementTerminatingTargetResource {
  /**
   * Required
   */
  name?: string;

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

export default CommPlayAnnouncementTerminatingTargetResource;
