import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

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

  /**
   */
  extension?: CommReferencedExtensionResource;

  /**
   */
  prompt?: CommTerminatingPromptResource;

  /**
   */
  dispatchingType?: "Ringing" | "Terminating";

  /**
   * Phone number name
   */
  name?: string;

  /**
   */
  destination?: CommPhoneNumberResource;
}

export default CommTerminatingActionRequestTargets;
