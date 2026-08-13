import type CommCloudDestination from "./CommCloudDestination.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommTerminatingActionRequestTargets {
  /**
   * Terminating target type
   * Example: CloudConnectorTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "CloudConnectorTerminatingTarget";

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
   * The customised target name
   */
  name?: string;

  /**
   */
  destination?: CommCloudDestination;
}

export default CommTerminatingActionRequestTargets;
