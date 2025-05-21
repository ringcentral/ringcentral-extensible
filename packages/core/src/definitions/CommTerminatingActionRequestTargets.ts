import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommTerminatingActionRequestTargets {
  /**
   * Terminating target type
   * Example: ImsVoiceMailTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";

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
