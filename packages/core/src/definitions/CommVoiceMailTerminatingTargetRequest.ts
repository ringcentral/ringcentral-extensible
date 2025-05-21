import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommVoiceMailTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   * Example: VoiceMailTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";

  /** */
  extension?: CommReferencedExtensionResource;

  /**
   * Required
   */
  prompt?: CommTerminatingPromptResource;
}

export default CommVoiceMailTerminatingTargetRequest;
