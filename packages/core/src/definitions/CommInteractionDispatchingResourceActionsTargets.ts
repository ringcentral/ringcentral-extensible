import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import CommDeviceResource from "./CommDeviceResource.js";
import CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import CommIntegrationResource from "./CommIntegrationResource.js";
import CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommInteractionDispatchingResourceActionsTargets {
  /** */
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

  /** */
  extension?: CommReferencedExtensionResource;

  /** */
  device?: CommDeviceResource;

  /** */
  destination?: CommPhoneNumberResource;

  /** */
  integration?: CommIntegrationResource;

  /** */
  prompt?: CommTerminatingPromptResource;

  /** */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommInteractionDispatchingResourceActionsTargets;
