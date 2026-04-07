import type CommDeviceResource from "./CommDeviceResource.js";
import type CommIntegrationResource from "./CommIntegrationResource.js";
import type CommPhoneNumberResource from "./CommPhoneNumberResource.js";
import type CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";
import type CommTerminatingPromptResource from "./CommTerminatingPromptResource.js";

interface CommInteractionDispatchingResourceActionsTargets {
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
  device?: CommDeviceResource;

  /**
   */
  destination?: CommPhoneNumberResource;

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
