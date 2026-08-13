import type CommCloudDestination from "./CommCloudDestination.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommTerminatingActionResourceTargets {
  /**
   */
  name?: string;

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
   */
  destination?: CommCloudDestination;
}

export default CommTerminatingActionResourceTargets;
