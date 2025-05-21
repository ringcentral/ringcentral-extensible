import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";

interface CommTerminatingActionResourceTargets {
  /** */
  name?: string;

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

  /** */
  destination?: CommPhoneNumberResource;
}

export default CommTerminatingActionResourceTargets;
