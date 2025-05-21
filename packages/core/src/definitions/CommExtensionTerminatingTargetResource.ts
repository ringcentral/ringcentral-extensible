import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommExtensionTerminatingTargetResource {
  /**
   * Required
   */
  name?: string;

  /**
   * Terminating target type
   * Required
   * Example: ExtensionTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget"
    | "ImsVoiceMailTerminatingTarget";

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Required
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommExtensionTerminatingTargetResource;
