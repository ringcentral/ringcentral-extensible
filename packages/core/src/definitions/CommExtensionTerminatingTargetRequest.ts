import CommReferencedExtensionResource from "./CommReferencedExtensionResource.js";

interface CommExtensionTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   * Example: ExtensionTerminatingTarget
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";

  /**
   * Required
   */
  extension?: CommReferencedExtensionResource;

  /**
   * Required
   */
  dispatchingType?: "Ringing" | "Terminating";
}

export default CommExtensionTerminatingTargetRequest;
