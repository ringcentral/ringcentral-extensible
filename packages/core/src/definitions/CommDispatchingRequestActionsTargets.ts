import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommDeviceRequest from "./CommDeviceRequest.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import CommIntegrationRequest from "./CommIntegrationRequest.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

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

  /** */
  extension?: CommReferencedExtensionResource;

  /** */
  device?: CommDeviceRequest;

  /** */
  destination?: CommPhoneNumberResource;

  /** */
  integration?: CommIntegrationRequest;

  /**
   * Phone number name
   */
  name?: string;

  /** */
  prompt?: CommTerminatingPromptResource;

  /** */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommDispatchingRequestActionsTargets;
