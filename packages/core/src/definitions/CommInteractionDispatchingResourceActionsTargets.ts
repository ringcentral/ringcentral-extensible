import type CommCloudDestination from "./CommCloudDestination.js";
import type CommDeviceResource from "./CommDeviceResource.js";
import type CommIntegrationResource from "./CommIntegrationResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommInteractionDispatchingResourceActionsTargets {
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
  device?: CommDeviceResource;

  /**
   */
  destination?: CommCloudDestination;

  /**
   */
  integration?: CommIntegrationResource;

  /**
   */
  prompt?: CommTerminatingPromptResource;

  /**
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommInteractionDispatchingResourceActionsTargets;
