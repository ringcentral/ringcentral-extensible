import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommDeviceRequest from "./CommDeviceRequest.js";
import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommIntegrationRequest from "./CommIntegrationRequest.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommDispatchingRequestActionsTargets {
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
  device?: CommDeviceRequest;

  /**
   */
  destination?: CommPhoneNumberResource;

  /**
   */
  integration?: CommIntegrationRequest;

  /**
   * Phone number name
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
