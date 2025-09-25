import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommTerminatingActionRequestTargets {
  /**
   * Terminating target type
   * Example: ExtensionTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";

  /** */
  extension?: CommReferencedExtensionResource;

  /** */
  prompt?: CommTerminatingPromptResource;

  /** */
  dispatchingType?: "Ringing" | "Terminating";

  /**
   * Phone number name
   */
  name?: string;

  /** */
  destination?: CommPhoneNumberResource;
}

export default CommTerminatingActionRequestTargets;
