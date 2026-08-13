import type CommCloudDestination from "./CommCloudDestination.js";
import type CommDeviceRequest from "./CommDeviceRequest.js";
import type CommIntegrationRequest from "./CommIntegrationRequest.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommDispatchingRequestActionsTargets {
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
  device?: CommDeviceRequest;

  /**
   */
  destination?: CommCloudDestination;

  /**
   */
  integration?: CommIntegrationRequest;

  /**
   * The customised target name
   * Example: Cloud Connector Contact
   */
  name?: string;

  /**
   */
  prompt?: CommTerminatingPromptResource;

  /**
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommDispatchingRequestActionsTargets;
