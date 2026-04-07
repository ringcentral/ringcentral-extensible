import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommTerminatingActionResourceTargets {
  /**
   */
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
   */
  destination?: CommPhoneNumberResource;
}

export default CommTerminatingActionResourceTargets;
