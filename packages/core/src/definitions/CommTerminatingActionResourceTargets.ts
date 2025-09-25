import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommTerminatingActionResourceTargets {
  /** */
  name?: string;

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

  /** */
  destination?: CommPhoneNumberResource;
}

export default CommTerminatingActionResourceTargets;
