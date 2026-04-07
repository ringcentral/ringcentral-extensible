interface CommTerminatingTargetRequest {
  /**
   * Terminating target type
   * Required
   */
  type?:
    | "ExtensionTerminatingTarget"
    | "PhoneNumberTerminatingTarget"
    | "PlayAnnouncementTerminatingTarget"
    | "VoiceMailTerminatingTarget";
}

export default CommTerminatingTargetRequest;
